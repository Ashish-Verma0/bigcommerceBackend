const mongoose =require("mongoose")


const subscriptionSchema = new mongoose.Schema({
    orderId: String,
    userId: String,
    email: String,
    productId: String,
    skuId: String,
    quantity: Number,
    digital: Boolean,
    productName: String,
    subscriptionDays: Number,
    startDate: Date,
    nextShipmentDate: Date,
    status: {
        type: String,
        enum: ['pending', 'active', 'cancelled', 'completed'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        default: 'Manual'
    },
    billingAddress: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        countryIso2: String
    },
    shippingAddress: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String,
        country: String,
        countryIso2: String
    },
    paymentHistory: [{
        orderId: String,
        paymentMethod: String,
        amount: Number,
        status: String,
        transactionId: String,
        processedAt: Date,
        errorMessage: String
    }],
    lastProcessedAt: Date,
    lastError: String,
    lastErrorDate: Date,
    retryCount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
