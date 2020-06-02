console.log('Loading function');

exports.handler = async (event, context, callback) => {
    callback(null, 'hello world');
};
