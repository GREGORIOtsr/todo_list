# To Do List with Vite + React #

A To Do list made with Vite and React where you can add and delete tasks, each with its own task name, deadline and priority.

The project follows the following component structure:

    /src 
    ├── App.jsx                     # Main jsx file
    ├── main.jsx                    # Root file
    └── /components                 # Components folder
        └── /Main
            ├── Main.jsx            # <main> component with form to add new tasks and clear/reset button
            ├── /Item               
            ├   └── Item.jsx        # Item component with structure for each task in the list
            ├── /List
            ├   └── List.jsx        # List component where all the tasks in the list are printed
            └── /Popup
                └── Popup.jsx       # Popup component that appears when a new task is added
