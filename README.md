## **Kanban board**

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

Routing: 
root is '/kanban-bord' (not '/') because it doesn't work with github pages when root is '/'

Styling: CSS modules.
