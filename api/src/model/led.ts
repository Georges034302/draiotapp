import * as mongoose from 'mongoose';

var newSchema = new mongoose.Schema({
  color: { type: String },
  status: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

newSchema.pre('save', function(next) {
//   this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

module.exports = mongoose.model('Led', newSchema);
