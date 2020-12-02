module.exports = {
	"db": "mongodb://localhost:27017",
	"server": {
		"port": 3000,
		"address": "0.0.0.0"
	},
	"accessControl": {
		"allowOrigin": "*",
		"allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
        "allowCredentials": false
	},
    "mongoOptions": {
        "serverOptions": {
        },
        "dbOptions": {
            "w": 1
        }
    },
	"humanReadableOutput": true,
	"collectionOutputType": "json",
	"urlPrefix": "",
	"ssl": {
		"enabled": true,
		"keyFile": "/path/to/server.key",
		"certificate": "/path/to/server.crt",
		"options": {
			"ciphers": "ECDHE-RSA-AES256-SHA384:AES256-SHA256:!RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!SSLV3:!eNULL"
		}
	}
}
