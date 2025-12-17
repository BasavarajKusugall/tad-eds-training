todo_list = []

def add_task(task):
    todo_list.append(task)
    return f'Task "{task}" added!'

def remove_task(task):
    if task in todo_list:
        todo_list.remove(task)
        return f'Task "{task}" removed!'
    return 'Task not found!'

def view_tasks():
    return '\n'.join(todo_list) if todo_list else 'No tasks available.'