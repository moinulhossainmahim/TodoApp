(function() {

	const taskNumber 	  = document.getElementById('task-name');
	const taskTitle 	  = document.getElementById('task-title');
	const taskDescription = document.getElementById('description-box');
	const taskPriority    = document.getElementById('dropdown-box');
	const addTaskButton   = document.getElementById('add-btn');
	const taskShowContainer  = document.querySelector('.task-show-container');
	const itemDiv 	      = document.getElementById('item-div');

	var taskNameValue 		 = '';
	var taskTitleValue 		 = '';
	var taskDescriptionValue = '';
	var taskPriorityValue 	 = '';
	var tasksList 			 = [];

	addTaskButton.addEventListener('click', function() {

		var itemsHtml = '<h1>Add new task</h1>';


		taskNameValue 		 = '';
		taskTitleValue 		 = '';
		taskDescriptionValue = '';
		taskPriorityValue 	 = '';

		var titleValue = taskTitle.value;
		var descriptionValue = taskDescription.value;
		var priorityValue = taskPriority.value;

		tasksList.push({title:titleValue, description:descriptionValue, priority:priorityValue});
		console.log(tasksList);
		tasksList.forEach(function(objectInArray, index){
			/*taskNameValue  			+= `<p id="task-name"><strong>Task:</strong> ${index+1}</p>`;
			taskTitleValue 			+= `<p id="task-title"><strong>Title:</strong> ${objectInArray.title}</p>`;
			taskDescriptionValue	+= `<p id="task-description"><strong>Description:</strong>${objectInArray.description}</p>`;
			taskPriorityValue		+= `<p id="task-priority"><strong>Priority: </strong> High ${objectInArray.priority}</p>`;*/

			itemsHtml += `<div id="item-div">
					<p id="task-name"><strong>Task:</strong> ${index+1}</p>
					<p id="task-title"><strong>Title:</strong> ${objectInArray.title}</p>
					<p id="task-description"><strong>Description:</strong> ${objectInArray.description}</p>
					<p id="task-priority"><strong>Priority:</strong> ${objectInArray.priority}</p>
				</div>`;
		});
		taskShowContainer.innerHTML = itemsHtml;
	});
			

})();