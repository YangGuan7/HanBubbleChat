fetch('./chat.js')
    .then(response => response.json())
    .then(conversations => {
        const chatContainer = document.getElementById('chat-container');

        conversations["241225"].forEach(conversation => {
            const { time, kr, tr } = conversation;

            // 創建外層容器
            const chatListDiv = document.createElement('div');
            chatListDiv.className = 'chatList';

            // 添加大頭貼
            const avatarImg = document.createElement('img');
            avatarImg.src = './img/avatar.jpg'; // 替換為你的大頭貼路徑
            avatarImg.alt = 'Avatar';
            chatListDiv.appendChild(avatarImg);

            // 創建右側容器
            const rightDiv = document.createElement('div');
            rightDiv.className = 'right';

            // 創建對話框
            const chatTextDiv = document.createElement('div');
            chatTextDiv.className = 'chatText';

            // 添加韓文對話
            const krSpan = document.createElement('span');
            krSpan.textContent = kr;
            chatTextDiv.appendChild(krSpan);

            // 添加虛線
            const hr = document.createElement('div');
            hr.style.borderBottom = '1px dashed lightgray';
            chatTextDiv.appendChild(hr);

            // 添加翻譯
            const trSpan = document.createElement('span');
            trSpan.textContent = tr;
            chatTextDiv.appendChild(trSpan);

            rightDiv.appendChild(chatTextDiv);

            // 添加時間
            const timeSpan = document.createElement('span');
            timeSpan.textContent = time;
            rightDiv.appendChild(timeSpan);

            chatListDiv.appendChild(rightDiv);

            // 插入到聊天容器中
            chatContainer.appendChild(chatListDiv);
        });
    })
    .catch(error => console.error('Error loading chat data:', error));
