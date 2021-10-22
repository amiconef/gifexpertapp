import React from 'react';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('Pruebas en <AddCategory />', () => {
    //const setCategories = () => { };
    const setCategories = jest.fn(); 
    let wrapper;
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
     
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
        
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('no debe de postear con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        //1. Simular el inputChange
        const value = 'Hola mundo';
        const input = wrapper.find('input');
     
        input.simulate('change', { target: { value } });
        //2. Simular el submit

        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //3. Setcategories se debe haber llamado
        //expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //4. El valor del input deber estar ''
        expect(wrapper.find('input').prop('value')).toBe('');




    })
      
})
