# PIT- Product-Cards

Este es un paquete de pruebas para NPM

### EJRS

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'pit-product-card';

```


````

    <ProductCard 
        product={ product }
        initialValues= {{ 
            count: 4,
            maxCount: 10,
            }}
        
    >

            {
            ( { count, isMaxCountReached, maxCount, increaseBy, reset} ) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons  />

                    
                </>
            )
            }


    </ProductCard>
````

