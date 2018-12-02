import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'title'
})

export class TitlePipe implements PipeTransform {

    prepositionWords = ['of', 'like', 'through', 'over', 'before', 'the'];

    transform(value: string, args?: any){
        if (!value)
            return null;

        let titleArray = value.split(" ");
        
        for(var i = 0; i < titleArray.length; i++)
        {
            titleArray[i] = titleArray[i].toLowerCase();
            if(!this.prepositionWords.includes(titleArray[i]))
                titleArray[i] = titleArray[i].charAt(0).toUpperCase() +  titleArray[i].substring(1).toLowerCase();
        }

        return titleArray.join(' ');
    }
}