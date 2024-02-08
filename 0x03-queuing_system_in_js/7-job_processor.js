import kue from 'kue';
const queue = kue.createQueue({concurrency: 2});

const blackListed = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
    job.progress(0);
    if (blackListed.includes(phoneNumber)) {
	const error = new Error(`Phone number ${phoneNumber} is blacklisted`);
	done(error);
    } else {
	job.progress(50);
	console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
    }
}

queue.process('push_notification_code_2', 2, (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message, job, done);
    done();
});
