import * as mongoose from 'mongoose';

const SegmentSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
    
    numbers: {
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

let Distance = mongoose.models.Distance || mongoose.model('Distance', SegmentSchema);


// const Segment = mongoose.model('Distance', SegmentSchema);

export default Distance;