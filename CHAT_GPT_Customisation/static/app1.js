const promptInput = document.querySelector('#prompt-input');
const askGPTButton = document.querySelector('#ask-gpt-button');
const responseDiv = document.querySelector('#response');

askGPTButton.addEventListener('click', () => {
	const prompt = promptInput.value;
	
	axios.post('/chatgpt', {
			prompt: prompt
		})
		.then((response) => {
			const generatedResponse = response.data.response;
			responseDiv.textContent = generatedResponse;
		})
		.catch((error) => {
			console.error(error);
		});
});
