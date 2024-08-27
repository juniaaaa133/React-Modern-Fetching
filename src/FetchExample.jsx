import { useQuery } from '@tanstack/react-query';

function FetchExample() {

const {
  data : products,
  isPending,
  isError
  } = useQuery({
      queryKey : ["products"],
      queryFn : () => {
      return fetch(
      `https://pointofsale-ei8t.onrender.com/api/products`
      )
      .then(res => res.json())
      .catch(err => console.log(err))
      }
  });
  
  return (
          products && !isPending && !isError &&
          <>
          <h1>SUCCESS.</h1>
          {
            products.map((prod,index) => (
            <div key={index}>{prod.name}</div>
            ))
          }
          </>
  )
  }

export default FetchExample
