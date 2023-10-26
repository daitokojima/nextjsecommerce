import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/format";

export const metadata = {
    title: "買い物かご - Nextmazon"
}

export default async function CartPage() {
    const cart = await getCart();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">買い物かご</h1>
      {cart?.items.map(cartItem => (
        <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity} />
      ))}
      {!cart?.items.length && <p>買い物かごが空です</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
            Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">レジに進む</button>
      </div>
    </div>
  );
}
