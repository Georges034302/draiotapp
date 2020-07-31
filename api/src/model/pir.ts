import * as mongoose from 'mongoose';

const SegmentSchema = new mongoose.Schema({
    detected: {
        type: Boolean,
        required: true,
        default: false,
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
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

let PIR = mongoose.models.PIR || mongoose.model('PIR', SegmentSchema);


// const Segment = mongoose.model('Distance', SegmentSchema);

export default PIR;