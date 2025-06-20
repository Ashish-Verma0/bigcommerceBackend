const express=require('express')
const subscriptionRouter=express.Router()
const {verifyPayment, transaction, storeOrderData, productBySku, addToCart, getDashboardSummary, getSubscriptionDashboardData, getProductDashboardData, getAccountsDashboardData, getInvoicesDashboardData, getAnalyticsDashboardData, getTransactionsDashboardData, getSalesDashboardData}=require('../controller/subscription.controller')


subscriptionRouter.get('/api/verify-payment/:orderId',verifyPayment)

subscriptionRouter.get('/api/order/:orderId/transaction',transaction)

subscriptionRouter.post('/store-order-data',storeOrderData)

subscriptionRouter.get('/api/product/:sku',productBySku)

subscriptionRouter.post('/api/add-to-cart',addToCart)

subscriptionRouter.get('/dashboard/summary', getDashboardSummary)

subscriptionRouter.get('/dashboard/subscription-stats', getSubscriptionDashboardData)

subscriptionRouter.get('/dashboard/product-stats', getProductDashboardData)

subscriptionRouter.get('/api/accounts/dashboard', getAccountsDashboardData)

subscriptionRouter.get('/api/invoices/dashboard', getInvoicesDashboardData)

subscriptionRouter.get('/api/analytics/dashboard', getAnalyticsDashboardData)

subscriptionRouter.get('/api/transactions/dashboard', getTransactionsDashboardData)

subscriptionRouter.get('/api/sales/dashboard', getSalesDashboardData)

module.exports=subscriptionRouter