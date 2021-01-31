(function() {
	const taskTitle 	  	 	 = document.getElementById('task-title');
	const taskDescription 	 	 = document.getElementById('description-box');
	const taskPriority    	 	 = document.getElementById('dropdown-box');
	const addTaskButton   	 	 = document.getElementById('add-btn');
	const taskShowContainer  	 = document.querySelector('.task-show-container');
	const itemDiv 	      	  	 = document.getElementById('item-div');
	const titleAlertMessage 	 = document.getElementById('title-alert-msg');
	const descriptionAlertMessage= document.getElementById('description-alert-msg');
	const priorityAlertMessage 	 = document.getElementById('priority-alert-msg');
	var tasksList 			 	 = [];

	addTaskButton.addEventListener('click', function() {
		var itemsHtml = '<h1>Task List</h1>';

		var titleValue 	= taskTitle.value;
		var descriptionValue = taskDescription.value;
		var priorityValue = taskPriority.value;

		if (titleValue ==='') {
			titleAlertMessage.style.display = 'block';
		} else {
			titleAlertMessage.style.display = 'none';
		}
		if (descriptionValue ==='') {
			descriptionAlertMessage.style.display = 'block';
		} else {
			descriptionAlertMessage.style.display = 'none';
		}
		if (priorityValue ==='') {
			priorityAlertMessage.style.display = 'block';
		} else {
			priorityAlertMessage.style.display = 'none';
		}

		if((titleValue ==='') || (descriptionValue ==='') || (priorityValue ==='')) {
			return false;
		}

		tasksList.push({title:titleValue, description:descriptionValue, priority:priorityValue});
		console.log(tasksList);
		tasksList.forEach(function(objectInArray, index){
			var badgeElements ='';
			if(objectInArray.priority == 1) {
				badgeElements = '<span class="badge-high">High</span>';
			} else if(objectInArray.priority == 2) {
				badgeElements = '<span class="badge-medium">Medium</span>';
			} else if(objectInArray.priority == 3) {
				badgeElements = '<span class="badge-low">Low</span>';
			}

			itemsHtml += `<div id="item-div">
					<p id="task-name"><strong>Task:</strong> ${index+1}</p>
					<p id="task-title"><strong>Title:</strong> ${objectInArray.title}</p>
					<p id="task-description"><strong>Description:</strong> ${objectInArray.description}</p>
					<p id="task-priority"><strong>Priority:</strong> ${badgeElements}</p>
				</div>`;
		});
		taskShowContainer.innerHTML = itemsHtml;
		clearInputs();
		
	});

	function clearInputs() {
		taskTitle.value = '';
		taskDescription.value = '';
		taskPriority.value = '';
	}

})();