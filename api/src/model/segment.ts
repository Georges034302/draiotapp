import * as mongoose from 'mongoose';

const SegmentSchema = new mongoose.Schema({

    status: {
        type: Boolean,
        required: true,
        default: false,
    },
    numbers: {
        type: Number,
        required: true,
        default: 0,
    },

    submode: {
        type: Number,
        required: true,
        default: 0,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

SegmentSchema.pre('save', function (next) {
    next();
});

SegmentSchema.pre('update', function () {
    this.update({}, { $set: { updatedAt: Date.now() } });
});

SegmentSchema.pre('findOneAndUpdate', function () {
    this.update({}, { $set: { updatedAt: Date.now() } });
});

// const Segment = mongoose.model('Segment', SegmentSchema);

let Segment = mongoose.models.Segment || mongoose.model('Segment', SegmentSchema);


export default Segment;
