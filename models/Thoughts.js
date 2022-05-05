const moment = require("moment")

const { Schema, model } = require('mongoose');
const reactionsSchema = require("./Reaction")
const formatTime = (timeStamp) => {
    return moment().format("MMM Do YY");
}
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => formatTime(timeStamp)
    },
    username:
    {
        type: String,
        required: true,
    },
    reactions: [reactionsSchema]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
