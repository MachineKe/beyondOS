let windowCount = 0;
const initialAppContentHeight = 610; // Initial height for app content
const initialAppContentWidth = 530; // Initial width for app content
const initialWindowHeight = 670; // Initial height for the windows
const initialWindowWidth = 550; // Initial width for the windows

// Function to open a new window for Weather App
function openWeatherAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;

    // Content for Weather App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Weather App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/Weather-App-Javascript-/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}

// Function to open a new window for Countdown App
function openCountdownAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
 // Content for Countdown App
 const appContent = `
 <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Countdown App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
 <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
     <iframe src="./Apps/countDownApp/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
     <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
 </div>`;
 
 newWindow.innerHTML = appContent;
 newWindow.style.height = initialWindowHeight + 'px';
 newWindow.style.width = initialWindowWidth + 'px';
 document.body.appendChild(newWindow);
}    

// Function to open a new window for image gen App
function openImageGenAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for image gen App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Image Generator App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/ImageGenerator/LandingPage.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}

// Function to open a new window for digital clock App
function openDigitalClockAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for digital clock App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Digital Clock App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/Digital-Clock-JavaScript-/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}

// Function to open a new window for stop watch App
function openStopWatchAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for stop watch App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">StopWatch App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/StopWatch/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}

// Function to open a new window for piano App
function openPianoAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for piano App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Piano App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/Javascript-Piano/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}

// Function to open a new window for calculator App
function openCalculatorAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for calculator App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Calculator App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="./Apps/Simple-Javascript-Calculator/index.html" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}



// Function to open a new window for career App
function openCareerAppWindow() {
    windowCount++;
    const windowId = 'window' + windowCount;
    const newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.id = windowId;
    
    // Content for career App
    const appContent = `
        <div class="window-header" draggable="true" ondragstart="startDrag(event, '${windowId}')">Career App<span class="close" onclick="closeWindow('${windowId}')">&times;</span></div>
        <div class="window-content" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"> <!-- Adjusted content width and height -->
            <iframe src="https://beyondjobs.vercel.app" frameborder="0" class="app-frame" style="width: ${initialAppContentWidth}px; height: ${initialAppContentHeight}px;"></iframe>
            <div class="resize-handle" onmousedown="startResize(event, '${windowId}')"></div>
        </div>`;
    
    newWindow.innerHTML = appContent;
    newWindow.style.height = initialWindowHeight + 'px';
    newWindow.style.width = initialWindowWidth + 'px';
    document.body.appendChild(newWindow);
}


// Function to close a window
function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        window.remove();
    }
}

// Function to start dragging a window
function startDrag(event, windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        const offsetX = event.clientX - window.offsetLeft;
        const offsetY = event.clientY - window.offsetTop;
        document.onmousemove = function (event) {
            dragWindow(event, offsetX, offsetY, window);
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

// Function to drag a window
function dragWindow(event, offsetX, offsetY, window) {
    event.preventDefault();
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    window.style.left = x + 'px';
    window.style.top = y + 'px';
}

// Function to start resizing a window
function startResize(event, windowId) {
    const window = document.getElementById(windowId);
    if (window) {
        const initialWidth = window.offsetWidth;
        const initialHeight = window.offsetHeight;
        const startX = event.clientX;
        const startY = event.clientY;
        document.onmousemove = function (event) {
            resizeWindow(event, window, initialWidth, initialHeight, startX, startY);
        }
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}

// Function to resize a window
function resizeWindow(event, window, initialWidth, initialHeight, startX, startY) {
    event.preventDefault();
    const newWidth = initialWidth + (event.clientX - startX);
    const newHeight = initialHeight + (event.clientY - startY);
    window.style.width = newWidth + 'px';
    window.style.height = newHeight + 'px';
    
    // Adjust the size of the iframe content
    const iframe = window.querySelector('iframe');
    if (iframe) {
        iframe.style.width = (newWidth - 20) + 'px'; // Subtracting padding
        iframe.style.height = (newHeight - 40) + 'px'; // Subtracting header and padding
    }
}


// Function to toggle the visibility of the app drawer
function toggleAppDrawer(event) {
    const appDrawer = document.getElementById('appDrawer');
    if (appDrawer.classList.contains('show')) {
        appDrawer.classList.remove('show');
    } else {
        appDrawer.classList.add('show');
    }
}

