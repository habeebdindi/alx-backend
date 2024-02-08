import kue from 'kue';
const queue = kue.createQueue();

const jobData = {
    phoneNumber: "090134235",
    message: "Hi there!",
}
const job = queue.create('push_notification_code', jobData).save(err => {
    if (!err) console.log('Notification job created: ', job.id);
});

queue.on('job complete', (id, result) => {
    console.log('Notification job completed');
});
queue.on('job failed', (id, error) => {
    console.log('Notification job failed');
});
