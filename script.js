import supabaseClient from './supaClient.js';
import Component from './Component.js';

async function fetchAllComponents() {
    try {
        const { data, error } = await supabaseClient
            .from('Components')
            .select('*');

        if (error) throw error;
        return data.map(componentData => Component.fromJson(componentData));
    } catch (error) {
        console.error('Ошибка при выборке данных:', error);
        return null;
    }
}

function renderComponents(components) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очистка списка перед добавлением

    components.forEach(component => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${component.image_url}" alt="${component.name}">
            <h2>${component.name}</h2>
            <p>${component.description}</p>
            <p class="cost">Цена: ${component.cost}</p>
            <p class="count">Количество: ${component.count}</p>
        `;

        productList.appendChild(card);
    });
}

fetchAllComponents().then(components => {
    if (components) {
        console.log('Комплектующие:', components);
        renderComponents(components);
    } else {
        console.log('Не удалось получить комплектующие');
    }
});