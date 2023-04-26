## **Kanban board** (create-react-app)

demo: https://kanban-board-tan.vercel.app/

mock.js - mock data used for testing

emptyMock.js - empty array with specific structure is used in final version when localstorage is empty

mock data structure:
```javascript
const dataMock = [
   {
        title: 'backlog',
        issues: [
            {
                id: '12345',
                name: 'Sprint bugfix',
	    description: ‘Fix all the bugs’
            }
        ]
   },
   // etc
]
```

Styling: CSS modules.
