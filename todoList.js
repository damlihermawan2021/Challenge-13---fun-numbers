let todos = [
  {
    id: 1,
    task: 'mencuci',
    status: false,
  }
]

/* soal 1:
buat function untuk menambahkan task baru
*/

function addTodo(id,task,status){
  this.id = id,
  this.task = task,
  this.status = false
}

todos.push( { id: 2,
    task: 'menggambar',
    status: false})
console.log(todos)


 // [{ id: 1,task: 'mencuci',status: false}, { id: 2,task: ',menggambar',status: false,]



/* soal 2:
buat function untuk menghapus task sesuai id
*/

function removeTodoById(id) { 
    
    return todos.splice(id,1) 
    
}

removeTodoById(1)

console.log(todos)



const todaysTask = [
  {
    id: 1,
    task: 'mencuci',
    status: false,
  },
  {
    id: 2,
    task: 'beli sayur',
    status: true,
  },
  {
    id: 3,
    task: 'menggambar',
    status: false,
  },
  {
    id: 4,
    task: 'ngoding',
    status: true,
  },

]

console.log(todaysTask)
/* soal 3:
buat function untuk mencari task
*/

function searchByTask(task) {
  return todaysTask;
}

searchByTask('beli sayur') // {id: 2, task: 'beli sayur',status: true}


console.log('----------------')

/* soal 4:
buat function untuk mengelompokkan task yang sudah selesai dan belum selesai.
Jika status true maka kelompokkan ke done
Jika status false maka kelompokkan ke inProgress
*/


// return hasilnya berupa object 
  /*
  const result = {
    done: [
      {
        id: 2,
        task: 'beli sayur',
        status: true,
      },
      {
        id: 4,
        task: 'ngoding',
        status: true,
      }
    ],
    inProgress: [
      {
        id: 1,
        task: 'mencuci',
        status: false,
      },
      {
        id: 3,
        task: 'menggambar',
        status: false,
      },
    ]
  }
*/
function groupTaskByStatus(tasks) {
}

// console.log(groupByStatus(todaysTask))
  


