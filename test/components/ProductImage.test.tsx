import * as React from 'react';
import renderer from "react-test-renderer";
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe( 'ProductImage', () => {
   
    test('mostrar el compononte con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img='Custom product'  />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    })

    test('componente con la imagen del producto ', () =>{

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    } )
})

