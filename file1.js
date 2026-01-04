<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mini To-Do App</title>
    <style>
        body {
            font-family: Arial;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }
        .box {
            background: white;
            padding: 20px;
            width: 300px;
            border-radius: 10px;
        }
        input {
            width: 70%;
            padding: 8px;
        }
        button {
            padding: 8px;
            cursor: pointer;
        }
        ul {
            padding: 0;
            margin-top: 15px;
        }
        li {
            list-style: none;
            margin: 8px 0;
            background: #eee;
            padding: 8px;
            display: flex;
            justify-content: space-between;
        }
    </style>
</head>
<body>

<div class="box">
    <h3>To-Do List</h3>
    <input type="text" id="task" placeholder="Enter task">
    <button onclick="addTask()">Add</button>

    <ul id="list"></ul>
</div>

<script>
    function addTask() {
        let task = document.getElementById("task").value;

        if (task === "") {
            alert("Please enter a task");
            return;
        }

        let li = document.createElement("li");
        li.innerHTML = task + " <button onclick='this.parentElement.remove()'>X</button>";

        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
</script>

</body>
</html>
