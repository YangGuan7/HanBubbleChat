fetch('./chat.js')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // 檢查加載的 JSON 資料

    const chatContainer = document.getElementById('chat-container');

    // 遍歷 2024 年 12 月的每一天
    Object.keys(data["2024Dec"]).forEach(dateKey => {
      const dateConversations = data["2024Dec"][dateKey];
      
      // 顯示日期和星期
      const headerDiv = document.createElement('div');
      headerDiv.className = 'chatHeader';
      const headerSpan = document.createElement('span');

      // 計算星期
      const dateObj = new Date(dateKey);
      const dayOfWeek = dateObj.toLocaleString('zh-TW', { weekday: 'long' }); // 取得星期的中文名稱

      headerSpan.textContent = `2024年12月${dateKey.slice(3, 5)}日 ${dayOfWeek}`;
      headerDiv.appendChild(headerSpan);
      chatContainer.appendChild(headerDiv);

      // 顯示當天的聊天紀錄
      dateConversations.forEach((conversation) => {
        const { time, kr, tr, img } = conversation;

        // 創建聊天顯示結構
        const chatListDiv = document.createElement('div');
        chatListDiv.className = 'chatList';

        const avatarImg = document.createElement('img');
        avatarImg.className = 'avatarImg';
        avatarImg.src = './img/avatar.jpg'; // 替換為你的大頭貼路徑
        avatarImg.alt = 'Avatar';
        chatListDiv.appendChild(avatarImg);

        const rightDiv = document.createElement('div');
        rightDiv.className = 'right';

        const nameWrapper = document.createElement('div');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = '한건강';
        nameSpan.className = 'name';
        nameWrapper.appendChild(nameSpan);

        const chatTextDiv = document.createElement('div');
        chatTextDiv.className = 'chatText';

        // 如果有圖片，顯示圖片
        if (img) {
          const imgElement = document.createElement('img');
          imgElement.src = img;
          imgElement.alt = 'Image';
          imgElement.className = 'chatImg';
          chatTextDiv.appendChild(imgElement);
        } else {
          // 如果有 kr (韓文)，顯示韓文
          const krSpan = document.createElement('span');
          krSpan.className = 'kr';
          krSpan.textContent = kr;
          chatTextDiv.appendChild(krSpan);
        }

        const hr = document.createElement('div');
        hr.style.borderBottom = '1px dashed #EEEEEE';
        chatTextDiv.appendChild(hr);

        // 添加翻譯，並加上 class="tr"
        const trSpan = document.createElement('span');
        trSpan.className = 'tr';
        trSpan.textContent = tr;
        chatTextDiv.appendChild(trSpan);

        nameWrapper.appendChild(chatTextDiv);

        const timeSpan = document.createElement('span');
        timeSpan.className = 'time';
        timeSpan.textContent = time;

        rightDiv.appendChild(nameWrapper);
        rightDiv.appendChild(timeSpan);
        chatListDiv.appendChild(rightDiv);

        chatContainer.appendChild(chatListDiv);
      });
    });
  })
  .catch(error => console.error('Error loading chat data:', error));
