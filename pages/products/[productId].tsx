import ProductHeader from "@/components/ProductHeader";
import axios from "axios";

function ProductDetailPage({ message, productInfo }: any) {
  const headerTitle = "상품 상세 정보 페이지";
  return (
    <>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage : {message}</div>
      <p>{productInfo.name}</p>
    </>
  );
}

export async function getServerSideProps(context: any) {
  console.log(context.params.productId);

  const id = context.params.productId;
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return {
    props: { message: "서버에서 보내준 메시지", productInfo: response.data },
  };
}

export default ProductDetailPage;
