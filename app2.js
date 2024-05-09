document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('form button[type="submit"]');
    const fruitInput = document.getElementById('fruit-to-add');
    const fruitList = document.querySelector('.fruits');
  
    function createListItem(fruitName) {
      const li = document.createElement('li');
      li.classList.add('fruit');
      li.innerHTML = `
        ${fruitName}
        <button class="delete-btn">x</button>
        <button class="edit-btn">Edit</button>
      `;
      return li;
    }
    function addFruit() {
      const fruitName = fruitInput.value.trim();
      if (fruitName !== '') {
        const li = createListItem(fruitName);
        fruitList.appendChild(li);
        fruitInput.value = '';
        addEditDeleteListeners(li);
      }
    }
  
    function deleteFruit(event) {
      if (event.target.classList.contains('delete-btn')) {
        const li = event.target.closest('.fruit');
        li.remove();
      }
    }
  
    function editFruit(event) {
      if (event.target.classList.contains('edit-btn')) {
        const li = event.target.closest('.fruit');
        const fruitNameElement = li.firstElementChild;
        const fruitName = fruitNameElement.textContent.trim();
        const newFruitName = prompt('Edit fruit:', fruitName);
        if (newFruitName !== null && newFruitName.trim() !== '') {
          fruitNameElement.textContent = newFruitName.trim();
        }
      }
    }
  
    function addEditDeleteListeners(li) {
      li.querySelector('.delete-btn').addEventListener('click', deleteFruit);
      li.querySelector('.edit-btn').addEventListener('click', editFruit);
    }
  
    addBtn.addEventListener('click', function(event) {
      event.preventDefault();
      addFruit();
    });
  
    document.querySelectorAll('.fruit').forEach(li => {
      addEditDeleteListeners(li);
    });
  });
  