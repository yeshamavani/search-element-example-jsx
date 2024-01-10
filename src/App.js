import './App.css';
import './element/styles.css'
import '@sourceloop/search-element/search-element'
import { useEffect, useRef } from 'react';
import ProjectIcon from './images/box.svg';
import workspaceIcon from './images/workspaceIcon.png';
import tableIcon from './images/tables.svg';
import { mockData } from './data';


const SearchSourceType  = {
  Group: 'lists',
  Workspace: 'workspaces',
  Board: 'boards',
  BoardTemplate: 'boardtemplates',
  WorkspaceTemplate: 'workspacetemplates',
}

const models = [
  {
    name: SearchSourceType.Workspace,
    displayName: 'Workspaces',
    imageUrl: workspaceIcon,
  },
  {
    name: SearchSourceType.Board,
    displayName: 'Projects',
    imageUrl: ProjectIcon,
  },
  {
    name: 'list',
    displayName: 'Lists',
    imageUrl: tableIcon,
  },
  {
    name: SearchSourceType.WorkspaceTemplate,
    displayName: 'Workspace Templates',
    imageUrl: workspaceIcon,
  },
  {
    name: SearchSourceType.BoardTemplate,
    displayName: 'Project Templates',
    imageUrl: ProjectIcon,
  },
];

const config = {
  displayPropertyName: 'name',
  models: models,
  order: [`name ASC`, `description DESC`],
  hideCategorizeButton: true,
  placeholder: 'Search Programs, Projects or Dashboards',
  categorizeResults: true,
  saveInRecents: true,
  limit: 4,
  hideRecentSearch: false,
  saveInRecentsOnlyOnEnter: false,
  limitByType: true,
};

const searchProvider = {searchApiRequestWithPromise:  async ()=> [
  {
      "parentid": "56f80882-1d6f-e4a9-ff34-d5a5330ff994",
      "parenttype": null,
      "name": "shubham Project",
      "modifiedon": "2023-09-29T17:57:54.724Z",
      "id": "efb02da8-c61d-7477-67dc-6fd3956a7231",
      "source": "boards",
      "rank": 0.1
  },
  {
      "parentid": null,
      "parenttype": null,
      "name": "Shubham Workspace",
      "modifiedon": "2023-10-04T07:39:29.010Z",
      "id": "ea867ed2-ee52-4400-95a2-023d0bf2b5fa",
      "source": "workspaces",
      "rank": 0.1
  }
], recentSearchApiRequestWithPromise: async()=> async ()=> [
  {
      "parentid": "56f80882-1d6f-e4a9-ff34-d5a5330ff994",
      "parenttype": null,
      "name": "shubham Project",
      "modifiedon": "2023-09-29T17:57:54.724Z",
      "id": "efb02da8-c61d-7477-67dc-6fd3956a7231",
      "source": "boards",
      "rank": 0.1
  },
  {
      "parentid": null,
      "parenttype": null,
      "name": "Shubham Workspace",
      "modifiedon": "2023-10-04T07:39:29.010Z",
      "id": "ea867ed2-ee52-4400-95a2-023d0bf2b5fa",
      "source": "workspaces",
      "rank": 0.1
  }
]};

function App() {
  const searchElement = useRef(null);


  useEffect(() => {
    if (searchElement.current) {
      const element = searchElement.current;
      element.searchProvider = searchProvider;
      element.config = config;
      return () => {
        element.removeEventListener('clicked', ()=>{});
      };
    }
  }, []);
  return (
    <div className="App">
      <sourceloop-search-element
        ref={searchElement}
      ></sourceloop-search-element>
    </div>
  );
}

export default App;
