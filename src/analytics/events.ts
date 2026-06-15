export type AnalyticsEvent = 'product_viewed'|'search_performed'|'cart_updated'|'checkout_started'|'payment_completed'|'admin_action';
export function track(event: AnalyticsEvent, properties: Record<string, string | number | boolean>) { console.info('[analytics]', event, properties); }
