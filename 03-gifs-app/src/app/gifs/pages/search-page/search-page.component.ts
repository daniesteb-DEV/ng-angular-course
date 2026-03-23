import { inject, Component, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);
  onSearch(txtSearch: string) {
    this.gifService.searchGifs(txtSearch)
      .subscribe((resp) => {
        this.gifs.set(resp);
      });
  }
}
