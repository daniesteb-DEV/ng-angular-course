import { inject, Component } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(GifsService);
  onSearch(txtSearch: string) {
    this.gifService.searchGifs(txtSearch);
  }
}
