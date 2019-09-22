import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../Service/WebAPI.service';

@Component({
  selector: 'app-work-graph',
  templateUrl: './work-graph.component.html',
  styleUrls: ['./work-graph.component.scss']
})
export class WorkGraphComponent implements OnInit {
  dataSource;
  demoId: string;
  dataSource1;
  dataSource3;
  obj;
  constructor(private Service:  WebAPIService) {

    Service.CountByAppNames().subscribe(
      (Response) => {
      this.obj = Response.toString();
      console.log('obj receiving', this.obj);
    });

    console.log('sdfObj', this.obj);

    //  console.log("Obj",JSON.stringify(obj,undefined,2))
     this.dataSource3 = {
      chart: {
          'caption': 'Applications for a selected resource for a specific period',
          'subCaption': 'Inclusive of Tasks and CR\'s also',
          'xAxisName': 'Applications',
          'yAxisName': 'No of Requests served',
          // "numberSuffix": "K",
          'theme': 'fusion',
      },
      // Chart Data
      // "data":this.obj

      'data': [
                      {
                          'label': 'Bakersfield Central',
                          'value': '880000'
                      },
                      {
                          'label': 'Garden Groove harbour',
                          'value': '730000'
                      }
                  ]

      };



      //// this is the second graph
      this.demoId = 'ex1';

      this.dataSource1 = {
        chart: {
          'caption': 'Quarterly expenditure',
          'xAxisname': 'Quarter',
          'yAxisName': 'Expenditure (In USD)',
          'numberPrefix': '$',
          'baseFont': 'Roboto',
          'baseFontSize': '14',
          'labelFontSize': '15',
          'captionFontSize': '20',
          'subCaptionFontSize': '16',
          'paletteColors': '#2c7fb2,#6cc184,#fed466',
          'bgColor': '#ffffff',
          'legendShadow': '0',
          'valueFontColor': '#ffffff',
          'showXAxisLine': '1',
          'xAxisLineColor': '#999999',
          'divlineColor': '#999999',
          'divLineIsDashed': '1',
          'showAlternateHGridColor': '0',
          'subcaptionFontBold': '0',
          'subcaptionFontSize': '14',
          'showHoverEffect': '1',
          'theme': 'fusion',

        },
        'categories': [{
          'category': [{
            'label': 'CQA'
          }, {
            'label': 'Scorecard'
          }, {
            'label': 'Gupta Sql'
          }]
        }],
        'dataset': [{
          'seriesname': 'Incidents',
          'data': [{
            'value': '121000'
          }, {
            'value': '135000'
          }, {
            'value': '123500'
          }]
        }, {
          'seriesname': 'Tasks',
          'data': [{
            'value': '190000'
          }, {
            'value': '195000'
          }, {
            'value': '187000'
          }]
        }, {
          'seriesname': 'Change Requests',
          'data': [{
            'value': '225000'
          }, {
            'value': '260000'
          }, {
            'value': '245000'
          }]
        }]
      };

      //// this is third graph

      this.dataSource = {
        'chart': {
            'caption': 'Ticket\'s count based on Application',
            'subCaption': 'Tickets grouped by Application',
            // "numberprefix": "$",
            'theme': 'fint'
        },
//        "data": this.obj
'data': [
  {
      'label': 'CQA',
      'value': '28'
  },
  {
      'label': 'Gupta',
      'value': '14'
  },
  {
      'label': 'Elroy',
      'value': '105'
  },
  {
      'label': 'Sentinel',
      'value': '49'
  }
]


      };


}
ngOnInit() {
  console.log('coming into ng onit');

  // .subscribe((Response)=>
  // {
  //   this.obj=Response.json();
  //   console.log("obj receiving",this.obj)
  // })
}
}



