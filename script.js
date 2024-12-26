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

            // 創建固定名稱
            const nameWrapper = document.createElement('div');
            const nameSpan = document.createElement('span');
            nameSpan.textContent = '한건강'; // 固定名稱
            nameSpan.className = 'name';
            nameWrapper.appendChild(nameSpan);

            // 創建聊天內容區域
            const chatTextDiv = document.createElement('div');
            chatTextDiv.className = 'chatText';

            // 添加韓文對話，並加上 class="kr"
            const krSpan = document.createElement('span');
            krSpan.className = 'kr';  // 添加 kr class
            krSpan.textContent = kr;
            chatTextDiv.appendChild(krSpan);

            // 添加虛線
            const hr = document.createElement('div');
            hr.style.borderBottom = '1px dashed #EEEEEE';
            chatTextDiv.appendChild(hr);

            // 添加翻譯，並加上 class="tr"
            const trSpan = document.createElement('span');
            trSpan.className = 'tr';  // 添加 tr class
            trSpan.textContent = tr;
            chatTextDiv.appendChild(trSpan);

            nameWrapper.appendChild(chatTextDiv);

            // 創建時間
            const timeSpan = document.createElement('span');
            timeSpan.className = 'time';
            timeSpan.textContent = time;

            // 將聊天內容和時間加到右側容器
            rightDiv.appendChild(nameWrapper);
            rightDiv.appendChild(timeSpan);

            // 將右側容器加到外層容器
            chatListDiv.appendChild(rightDiv);

            // 插入到聊天容器中
            chatContainer.appendChild(chatListDiv);
        });
    })
    .catch(error => console.error('Error loading chat data:', error));
