export const STAGES = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];

export const ORDER_STATES = {
  NORMAL_IN_TRANSIT: {
    id: "ORD-89234-X",
    status: "Out for Delivery", // Options: 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'
    isDelayed: false,
    trackingAvailable: true,
    estimatedDelivery: "Today, Sep 22, by 4:30 PM",
    carrier: {
      name: "FedEx Express",
      trackingNumber: "FX-90218392",
      driverName: "Michael R.",
      driverPhone: "+1 (555) 019-2834",
    },
    items: [
      {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        variant: "Matte Black",
        price: 199.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        name: "Protective Carrying Case",
        variant: "Hard Shell",
        price: 24.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&auto=format&fit=crop&q=80",
      },
    ],
    summary: { subtotal: 224.98, shipping: 0.0, tax: 18.0, total: 242.98 },
    timeline: [
      { title: "Out for Delivery", location: "Local Courier Facility", time: "08:30 AM", completed: true, active: true },
      { title: "Shipped", location: "Regional Distribution Center", time: "Yesterday, 11:15 PM", completed: true },
      { title: "Processing", location: "Fulfillment Center", time: "Sep 20, 02:45 PM", completed: true },
      { title: "Order Placed", location: "Online Store", time: "Sep 20, 01:10 PM", completed: true },
    ],
  },

  // REQUIRED STATE 1: Delayed Order
  DELAYED: {
    id: "ORD-89234-X",
    status: "Shipped",
    isDelayed: true,
    trackingAvailable: true,
    delayReason: "Severe weather condition along the transport route.",
    estimatedDelivery: "Updated: Tomorrow, Sep 23, by 12:00 PM",
    carrier: { name: "FedEx Express", trackingNumber: "FX-90218392" },
    items: [
      {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        variant: "Matte Black",
        price: 199.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80",
      },
    ],
    summary: { subtotal: 199.99, shipping: 0.0, tax: 16.0, total: 215.99 },
    timeline: [
      { title: "Shipment Delayed", location: "Transit Hub - Chicago, IL", time: "Today, 06:10 AM", completed: true, isAlert: true },
      { title: "Shipped", location: "Regional Distribution Center", time: "Sep 21, 11:15 PM", completed: true },
      { title: "Processing", location: "Fulfillment Center", time: "Sep 20, 02:45 PM", completed: true },
    ],
  },

  // REQUIRED STATE 2: Delivered but Not Received
  DELIVERED_NOT_RECEIVED: {
    id: "ORD-89234-X",
    status: "Delivered",
    isDelayed: false,
    trackingAvailable: true,
    deliveredTime: "Today at 2:15 PM (Left at Front Door)",
    carrier: { name: "FedEx Express", trackingNumber: "FX-90218392" },
    items: [
      {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        variant: "Matte Black",
        price: 199.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80",
      },
    ],
    summary: { subtotal: 199.99, shipping: 0.0, tax: 16.0, total: 215.99 },
    timeline: [
      { title: "Delivered", location: "Front Door / Porch", time: "Today, 02:15 PM", completed: true },
      { title: "Out for Delivery", location: "Local Facility", time: "Today, 08:30 AM", completed: true },
    ],
  },

  // REQUIRED STATE 3: Tracking Not Available Yet
  NO_TRACKING_YET: {
    id: "ORD-89234-X",
    status: "Processing",
    isDelayed: false,
    trackingAvailable: false,
    estimatedDelivery: "Pending Carrier Assignment (Est. Sep 24)",
    carrier: null,
    items: [
      {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        variant: "Matte Black",
        price: 199.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80",
      },
    ],
    summary: { subtotal: 199.99, shipping: 0.0, tax: 16.0, total: 215.99 },
    timeline: [
      { title: "Processing", location: "Preparing in warehouse", time: "Today, 10:00 AM", completed: true, active: true },
      { title: "Order Placed", location: "Online Store", time: "Today, 09:30 AM", completed: true },
    ],
  },
};