import redis from 'redis';
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('ready', () => console.log('Redis client connected to the server'));

const fieldValues = {
    'Portland': 50,
    'Seattle': 80,
    'New York': 20,
    'Bogota': 20,
    'Cali': 40,
    'Paris': 2
};

Object.entries(fieldValues).forEach(([field, value]) => {
    client.hset('HolbertonSchools', field, value, redis.print);
});

client.hgetall('HolbertonSchools', (err, result) => {
    if (err) {
        console.error('Error getting hash:', err);
    } else {
	console.log(JSON.stringify(result, null, 2));
    }
});
