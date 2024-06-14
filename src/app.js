export const items = [
    { title: 'Item 1', description: 'This is the first item.', color: 'bg-red-500' },
    { title: 'Item 2', description: 'This is the second item.', color: 'bg-green-500' },
    { title: 'Item 3', description: 'This is the third item.', color: 'bg-blue-500' },
  ];


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('container');
  container.innerHTML = items.map(item => `
    <div class="p-4 m-4 ${item.color} text-white rounded-lg">
      <h2 class="text-2xl font-bold">${item.title}</h2>
      <p class="mt-2">${item.description}</p>
    </div>
  `).join('');
});
