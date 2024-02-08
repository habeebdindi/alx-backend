import kue from 'kue';
const queue = kue.createQueue();

function createPushNotificationsJobs(jobs, queue) {
    if (!(Array.isArray(jobs))) {
	throw new Error("Jobs is not an array");
    }
    jobs.forEach(job => {
	const job = queue.create('push_notification_code_3', jobData).save(err => {
	    if (!err) console.log('Notification job created: ', job.id);
	});
    })
}

queue.on('job complete', (id, result) => {
    console.log(`'Notification job #${id} completed`);
});
queue.on('job failed', (id, error) => {
    console.log('Notification job failed: ', error);
});
queue.on('job progress', (id, progress) => {
    console.log(`Notification job #${id} ${progress}% complete`);
});

module.exports = createPushNotificationsJobs;
