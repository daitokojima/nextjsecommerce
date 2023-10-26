export function formatPrice(price: number) {
  return price.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
}