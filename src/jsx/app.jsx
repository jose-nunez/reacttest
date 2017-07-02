import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Main from 'Main';

require('foundation-sites/dist/css/foundation.css')
$(document).foundation();
import 'appStyles';

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>,
	document.getElementById('app')
);