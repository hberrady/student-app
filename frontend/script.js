const apiUrl = 'http://localhost:5000/students';

const studentList = document.getElementById('studentList');
const addStudentForm = document.getElementById('addStudentForm');
const studentNameInput = document.getElementById('studentName');

// Fetch and display students
async function fetchStudents() {
  const res = await fetch(apiUrl);
  const students = await res.json();
  studentList.innerHTML = '';
  students.forEach(student => {
    addStudentToDOM(student);
  });
}

// Add student to DOM list
function addStudentToDOM(student) {
  const li = document.createElement('li');
  li.dataset.id = student.id;

  const input = document.createElement('input');
  input.type = 'text';
  input.value = student.name;
  input.disabled = true;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit');

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.classList.add('save');
  saveBtn.style.display = 'none';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');

  li.appendChild(input);
  li.appendChild(editBtn);
  li.appendChild(saveBtn);
  li.appendChild(deleteBtn);
  studentList.appendChild(li);

  editBtn.addEventListener('click', () => {
    input.disabled = false;
    input.focus();
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
  });

  saveBtn.addEventListener('click', async () => {
    const newName = input.value.trim();
    if (newName === '') {
      alert('Name cannot be empty.');
      return;
    }
    const res = await fetch(`${apiUrl}/${student.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })
    });
    if (res.ok) {
      input.disabled = true;
      editBtn.style.display = 'inline';
      saveBtn.style.display = 'none';
    } else {
      alert('Failed to update student.');
    }
  });

  deleteBtn.addEventListener('click', async () => {
    if (confirm('Delete this student?')) {
      const res = await fetch(`${apiUrl}/${student.id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        li.remove();
      } else {
        alert('Failed to delete student.');
      }
    }
  });
}

// Handle form submit to add new student
addStudentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = studentNameInput.value.trim();
  if (!name) {
    alert('Enter a student name');
    return;
  }
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  if (res.ok) {
    const student = await res.json();
    addStudentToDOM(student);
    studentNameInput.value = '';
  } else {
    alert('Failed to add student');
  }
});

// Initial fetch of students
fetchStudents();

