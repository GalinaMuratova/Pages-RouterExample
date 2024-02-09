export const handleAddProducts = async () => {
    try {
        const response = await fetch('https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Pizza',
                price: '500',
                image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ae37f56eb05c434c82fb06f2d8d13d3c_366x366.webp',
            }),
        });
        await response.json();
        alert('Product added');
        window.location.reload();
    } catch (error) {
        console.error('Error', error);
    }
};
export const handleDeleteProduct = async (productId) => {
    try {
        await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'DELETE',
        });
        alert('Product deleted ');
        window.location.reload();
    } catch (error) {
        console.error('Error', error);
    }
};
export const handleUpdateAllProduct = async (productId) => {
    try {
        await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'La la la title',
                price: '999',
                image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ada478de4d6a466aa049f59b4656a781_366x366.webp',
            }),
        });
        alert('Product edited');
        window.location.reload();
    } catch (error) {
        console.error('Error', error);
    }
};

export const handleUpdateProduct = async (productId: string) => {
    try {
        await fetch(`https://js-course-18-c9943-default-rtdb.europe-west1.firebasedatabase.app/dishes/${productId}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:'Changed just title',
            }),
        });
        alert('Product changed');
        window.location.reload();
    } catch (error) {
        console.error('Error', error);
    }
};