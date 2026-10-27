
const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'files');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const server = http.createServer((req, res) => {

    // CORS: allow the React development server
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    const url = new URL(req.url, 'http://localhost:3000');
    const pathname = url.pathname;

    // GET /files: List all files
    if (req.method === 'GET' && pathname === '/files') {
        return fs.readdir(DATA_DIR, { withFileTypes: true }, (err, entries) => {
            if (err) {
                res.writeHead(500);
                return res.end('Could not list files');
            }

            const files = entries
                .filter(entry => entry.isFile())
                .map(entry => entry.name);

            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });

            res.end(JSON.stringify(files));
        });
    }

    // All remaining routes must have the form /files/filename
    if (!pathname.startsWith('/files/')) {
        res.writeHead(404);
        return res.end('Route not found');
    }

    let filename;

    try {
        filename = decodeURIComponent(pathname.slice('/files/'.length));
    } catch {
        res.writeHead(400);
        return res.end('Invalid filename');
    }

    // Validate the filename
    if (
        !filename ||
        filename === '.' ||
        filename === '..' ||
        filename.includes('/') ||
        filename.includes('\\') ||
        filename.includes('\0')
    ) {
        res.writeHead(400);
        return res.end('Invalid filename');
    }

    const filePath = path.join(DATA_DIR, filename);

    // GET: Read a file
    if (req.method === 'GET') {
        return fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(err.code === 'ENOENT' ? 404 : 500);
                return res.end(
                    err.code === 'ENOENT'
                        ? 'File not found'
                        : 'Error reading file'
                );
            }

            res.writeHead(200, {
                'Content-Type': 'text/plain; charset=utf-8'
            });
            res.end(data);
        });
    }

    // POST: Create a new file
    else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            fs.writeFile(filePath, body, { flag: 'wx' }, err => {
                if (err) {
                    res.writeHead(
                        err.code === 'EEXIST' ? 409 : 500
                    );
                    return res.end(
                        err.code === 'EEXIST'
                            ? 'File already exists'
                            : 'Error creating file'
                    );
                }

                res.writeHead(201);
                res.end('File created successfully');
            });
        });
    }

    // PUT: Update an existing file
    else if (req.method === 'PUT') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                // Do not create a file if it doesn't already exist
                await fs.promises.access(filePath);

                // Replace the complete contents
                await fs.promises.writeFile(filePath, body, 'utf8');

                res.writeHead(200);
                res.end('File updated successfully');
            } catch (err) {
                res.writeHead(err.code === 'ENOENT' ? 404 : 500);
                res.end(
                    err.code === 'ENOENT'
                        ? 'File not found'
                        : 'Error updating file'
                );
            }
        });
    }

    // DELETE: Delete a file
    else if (req.method === 'DELETE') {
        return fs.unlink(filePath, err => {
            if (err) {
                res.writeHead(err.code === 'ENOENT' ? 404 : 500);
                return res.end(
                    err.code === 'ENOENT'
                        ? 'File not found'
                        : 'Error deleting file'
                );
            }

            res.writeHead(200);
            res.end('File deleted successfully');
        });
    }

    // Unsupported HTTP method
    else {
        res.writeHead(405, {
            'Allow': 'GET, POST, PUT, DELETE'
        });
        res.end('Method not allowed');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
    console.log('Files are stored in:', DATA_DIR);
});
