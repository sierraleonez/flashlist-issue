/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { FlashList } from '@shopify/flash-list';
import moment from 'moment';
import React, { useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const data = {
  "status": "success",
  "message": "Successfully",
  "data": {
    "current_page": 1,
    "data": [
      {
        "date": "2024-10-10",
        "event": [
          {
            "event_id": 358787,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Core Inflation Rate MoM Sep",
            "description": null,
            "actual": "0.3%",
            "forecast": "0.2%",
            "previous": "0.3%",
            "is_publish": true
          },
          {
            "event_id": 358789,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Core Inflation Rate YoY Sep",
            "description": "In the United States, the core inflation rate tracks changes in prices that consumers pay for a basket of goods which excludes volatile food and fuel costs.",
            "actual": "3.3%",
            "forecast": "3.1%",
            "previous": "3.2%",
            "is_publish": true
          },
          {
            "event_id": 358786,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "CPI s.a Sep",
            "description": "In the United States, the Consumer Price Index or CPI measures changes in the prices paid by consumers for a basket of goods and services.",
            "actual": "314.686",
            "forecast": "314.4",
            "previous": "314.121",
            "is_publish": true
          },
          {
            "event_id": 358788,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Inflation Rate MoM Sep",
            "description": "Inflation Rate MoM measures month over month change in the price of goods and services.",
            "actual": "0.2%",
            "forecast": "0.1%",
            "previous": "0.2%",
            "is_publish": true
          },
          {
            "event_id": 344162,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Jobless Claims 4-week Average Oct/05",
            "description": null,
            "actual": "231K",
            "forecast": "225K",
            "previous": "224.25K",
            "is_publish": true
          },
          {
            "event_id": 358790,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Inflation Rate YoY Sep",
            "description": "In the United States, unadjusted Consumer Price Index for All Urban Consumers is based on the prices of a market basket of: Food (14% of total weight); Energy (8%); Commodities Less Food & Energy Commodities (21%) and Services Less Energy Services (57%). The last category is divided by: Shelter (32%), Medical Care Services (7%) and Transportation Services (6%).",
            "actual": "2.4%",
            "forecast": "2.3%",
            "previous": "2.5%",
            "is_publish": true
          },
          {
            "event_id": 358791,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "CPI Sep",
            "description": "In the United States, the Consumer Price Index or CPI measures changes in the prices paid by consumers for a basket of goods and services.",
            "actual": "315.3",
            "forecast": "314.9",
            "previous": "314.8",
            "is_publish": true
          },
          {
            "event_id": 344161,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Continuing Jobless Claims Sep/28",
            "description": "Continuing Jobless Claims refer to actual number of unemployed and currently receiving unemployment benefits who filed for unemployment benefits at least two weeks ago.",
            "actual": "1.861M",
            "forecast": "1.829M",
            "previous": "1.819M",
            "is_publish": true
          },
          {
            "event_id": 344163,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-10T12:30:00.000000Z",
            "title": "Initial Jobless Claims Oct/05",
            "description": "Initial jobless claims refer to the number of people who have filed for unemployment benefits with their state's unemployment agency for the first time during a specific reporting period, typically on a weekly basis. .",
            "actual": "258K",
            "forecast": "227K",
            "previous": "225K",
            "is_publish": true
          },
          {
            "event_id": 366690,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-10T13:15:00.000000Z",
            "title": "Fed Cook Speech",
            "description": "In the United States, the authority to set interest rates is divided between the Board of Governors of the Federal Reserve (Board) and the Federal Open Market Committee (FOMC). The Board decides on changes in discount rates after recommendations submitted by one or more of the regional Federal Reserve Banks. The FOMC decides on open market operations, including the desired levels of central bank money or the desired federal funds market rate.",
            "actual": "-",
            "forecast": "-",
            "previous": "-",
            "is_publish": true
          },
          {
            "event_id": 344164,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T14:30:00.000000Z",
            "title": "EIA Natural Gas Stocks Change Oct/04",
            "description": "Natural Gas Stocks Change refers to the weekly change of the natural gas supply situation.",
            "actual": "82Bcf",
            "forecast": "71Bcf",
            "previous": "55Bcf",
            "is_publish": true
          },
          {
            "event_id": 344165,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T15:30:00.000000Z",
            "title": "8-Week Bill Auction",
            "description": null,
            "actual": "4.64%",
            "forecast": "-",
            "previous": "4.655%",
            "is_publish": true
          },
          {
            "event_id": 344166,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T15:30:00.000000Z",
            "title": "4-Week Bill Auction",
            "description": null,
            "actual": "4.75%",
            "forecast": "-",
            "previous": "4.755%",
            "is_publish": true
          },
          {
            "event_id": 344168,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T16:00:00.000000Z",
            "title": "15-Year Mortgage Rate Oct/09",
            "description": null,
            "actual": "5.41%",
            "forecast": "-",
            "previous": "5.25%",
            "is_publish": true
          },
          {
            "event_id": 344167,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T16:00:00.000000Z",
            "title": "30-Year Mortgage Rate Oct/09",
            "description": "The Primary Mortgage Market Survey (PMMS) is focused on conventional, conforming, fully amortizing home purchase loans for borrowers who put 20 percent down and have excellent credit. Average commitment rates should be reported along with average fees and points to reflect the total upfront cost of obtaining the mortgage. The interest rate a lender would charge to lend mortgage money to a qualified borrower exclusive of the fees and points required by the lender. This commitment rate applies only to conventional financing on conforming mortgages with loan-to-value rates of 80 percent or less.",
            "actual": "6.32%",
            "forecast": "-",
            "previous": "6.12%",
            "is_publish": true
          },
          {
            "event_id": 366360,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-10T17:00:00.000000Z",
            "title": "30-Year Bond Auction",
            "description": null,
            "actual": "4.389%",
            "forecast": "-",
            "previous": "4.015%",
            "is_publish": true
          },
          {
            "event_id": 365927,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-10T20:30:00.000000Z",
            "title": "Fed Balance Sheet Oct/9",
            "description": null,
            "actual": "$7.05T",
            "forecast": "-",
            "previous": "$7.05T",
            "is_publish": true
          }
        ]
      },
      {
        "date": "2024-10-11",
        "event": [
          {
            "event_id": 358792,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "Core PPI MoM Sep",
            "description": "In the United States, the core Producer Price Index (PPI) measures average changes in prices received by domestic producers for their output excluding volatile items such food and energy.",
            "actual": "0.2%",
            "forecast": "0.2%",
            "previous": "0.3%",
            "is_publish": true
          },
          {
            "event_id": 358780,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "PPI Ex Food, Energy and Trade YoY Sep",
            "description": "In the United States, the Producer Price Index for final demand excluding food, energy, and trade services accounts for around 68% of the total Producer Price Index for final demand.",
            "actual": "3.2%",
            "forecast": "3.2%",
            "previous": "3.3%",
            "is_publish": true
          },
          {
            "event_id": 358782,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "Core PPI YoY Sep",
            "description": "In the United States, the core Producer Price Index (PPI) measures average changes in prices received by domestic producers for their output excluding volatile items such food and energy.",
            "actual": "2.8%",
            "forecast": "2.4%",
            "previous": "2.6%",
            "is_publish": true
          },
          {
            "event_id": 358781,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "PPI Ex Food, Energy and Trade MoM Sep",
            "description": "In the United States, the Producer Price Index for final demand excluding food, energy, and trade services accounts for around 68% of the total Producer Price Index for final demand.",
            "actual": "0.1%",
            "forecast": "0.2%",
            "previous": "0.2%",
            "is_publish": true
          },
          {
            "event_id": 366674,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "PPI Sep",
            "description": "In the United States, the Producer Price Index for final demand measures price change for commodities sold for personal consumption, capital investment, government, and export. It is composed of six main price indexes: final demand goods (33 percent of the total weight), which includes food and energy; final demand trade services (20 percent); final demand transportation and warehousing services (4 percent); final demand services less trade, transportation, and warehousing (41 percent); final demand construction (2 percent); and overall final demand.",
            "actual": "145.173",
            "forecast": "145",
            "previous": "145.103",
            "is_publish": true
          },
          {
            "event_id": 358783,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "PPI YoY Sep",
            "description": "In the United States, the Producer Price Index for final demand measures price change for commodities sold for personal consumption, capital investment, government, and export. It is composed of six main price indexes: final demand goods (33 percent of the total weight), which includes food and energy; final demand trade services (20 percent); final demand transportation and warehousing services (4 percent); final demand services less trade, transportation, and warehousing (41 percent); final demand construction (2 percent); and overall final demand.",
            "actual": "1.8%",
            "forecast": "1.5%",
            "previous": "1.9%",
            "is_publish": true
          },
          {
            "event_id": 358784,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-11T12:30:00.000000Z",
            "title": "PPI MoM Sep",
            "description": "In the United States, the Producer Price Inflation MoM for final demand measures month-over-month changes in the price for commodities sold for personal consumption, capital investment, government, and export. It is composed of six main price indexes: final demand goods (33 percent of the total weight), which includes food and energy; final demand trade services (20 percent); final demand transportation and warehousing services (4 percent); final demand services less trade, transportation, and warehousing (41 percent); final demand construction (2 percent); and overall final demand.",
            "actual": "0%",
            "forecast": "0.1%",
            "previous": "0.2%",
            "is_publish": true
          },
          {
            "event_id": 366653,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-11T13:45:00.000000Z",
            "title": "Fed Goolsbee Speech",
            "description": "In the United States, the authority to set interest rates is divided between the Board of Governors of the Federal Reserve (Board) and the Federal Open Market Committee (FOMC). The Board decides on changes in discount rates after recommendations submitted by one or more of the regional Federal Reserve Banks. The FOMC decides on open market operations, including the desired levels of central bank money or the desired federal funds market rate.",
            "actual": "-",
            "forecast": "-",
            "previous": "-",
            "is_publish": true
          },
          {
            "event_id": 344208,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T14:00:00.000000Z",
            "title": "Michigan Current Conditions Prel Oct",
            "description": "The Index of Consumer Expectations focuses on three areas: how consumers view prospects for their own financial situation, how they view prospects for the general economy over the near term, and their view of prospects for the economy over the long term. Each monthly survey contains approximately 50 core questions, each of which tracks a different aspect of consumer attitudes and expectations. The samples for the Surveys of Consumers are statistically designed to be representative of all American households, excluding those in Alaska and Hawaii. Each month, a minimum of 500 interviews are conducted by telephone.",
            "actual": "62.7",
            "forecast": "63.8",
            "previous": "63.3",
            "is_publish": true
          },
          {
            "event_id": 344209,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T14:00:00.000000Z",
            "title": "Michigan Consumer Expectations Prel Oct",
            "description": "The Index of Consumer Expectations focuses on three areas: how consumers view prospects for their own financial situation, how they view prospects for the general economy over the near term, and their view of prospects for the economy over the long term. Each monthly survey contains approximately 50 core questions, each of which tracks a different aspect of consumer attitudes and expectations. The samples for the Surveys of Consumers are statistically designed to be representative of all American households, excluding those in Alaska and Hawaii. Each month, a minimum of 500 interviews are conducted by telephone.",
            "actual": "72.9",
            "forecast": "74.5",
            "previous": "74.4",
            "is_publish": true
          },
          {
            "event_id": 344212,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T14:00:00.000000Z",
            "title": "Michigan Inflation Expectations Prel Oct",
            "description": "The Index of Consumer Expectations focuses on three areas: how consumers view prospects for their own financial situation, how they view prospects for the general economy over the near term, and their view of prospects for the economy over the long term. Each monthly survey contains approximately 50 core questions, each of which tracks a different aspect of consumer attitudes and expectations. The samples for the Surveys of Consumers are statistically designed to be representative of all American households, excluding those in Alaska and Hawaii. Each month, a minimum of 500 interviews are conducted by telephone.",
            "actual": "2.9%",
            "forecast": "2.6%",
            "previous": "2.7%",
            "is_publish": true
          },
          {
            "event_id": 344211,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T14:00:00.000000Z",
            "title": "Michigan 5 Year Inflation Expectations Prel Oct",
            "description": "The Index of Consumer Expectations focuses on three areas: how consumers view prospects for their own financial situation, how they view prospects for the general economy over the near term, and their view of prospects for the economy over the long term. Each monthly survey contains approximately 50 core questions, each of which tracks a different aspect of consumer attitudes and expectations. The samples for the Surveys of Consumers are statistically designed to be representative of all American households, excluding those in Alaska and Hawaii. Each month, a minimum of 500 interviews are conducted by telephone.",
            "actual": "3%",
            "forecast": "3.1%",
            "previous": "3.1%",
            "is_publish": true
          },
          {
            "event_id": 344210,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "High",
            "time": "2024-10-11T14:00:00.000000Z",
            "title": "Michigan Consumer Sentiment Prel Oct",
            "description": "The Index of Consumer Expectations focuses on three areas: how consumers view prospects for their own financial situation, how they view prospects for the general economy over the near term, and their view of prospects for the economy over the long term. Each monthly survey contains approximately 50 core questions, each of which tracks a different aspect of consumer attitudes and expectations. The samples for the Surveys of Consumers are statistically designed to be representative of all American households, excluding those in Alaska and Hawaii. Each month, a minimum of 500 interviews are conducted by telephone.",
            "actual": "68.9",
            "forecast": "70.4",
            "previous": "70.1",
            "is_publish": true
          },
          {
            "event_id": 364165,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T16:00:00.000000Z",
            "title": "WASDE Report",
            "description": null,
            "actual": "-",
            "forecast": "-",
            "previous": "-",
            "is_publish": true
          },
          {
            "event_id": 344173,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T17:00:00.000000Z",
            "title": "Baker Hughes Total Rigs Count Oct/11",
            "description": "US Total Rigs refer to the number of active US rigs drilling in a given week.",
            "actual": "586",
            "forecast": "-",
            "previous": "585",
            "is_publish": true
          },
          {
            "event_id": 344172,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Low",
            "time": "2024-10-11T17:00:00.000000Z",
            "title": "Baker Hughes Oil Rig Count Oct/11",
            "description": "US Crude Oil Rigs refer to the number of active US rigs drilling for oil in a given week.",
            "actual": "481",
            "forecast": "-",
            "previous": "479",
            "is_publish": true
          },
          {
            "event_id": 366691,
            "country": "United States",
            "country_url": "https://placeholder.pics/svg/300",
            "impact": "Medium",
            "time": "2024-10-11T17:10:00.000000Z",
            "title": "Fed Bowman Speech",
            "description": "In the United States, the authority to set interest rates is divided between the Board of Governors of the Federal Reserve (Board) and the Federal Open Market Committee (FOMC). The Board decides on changes in discount rates after recommendations submitted by one or more of the regional Federal Reserve Banks. The FOMC decides on open market operations, including the desired levels of central bank money or the desired federal funds market rate.",
            "actual": "-",
            "forecast": "-",
            "previous": "-",
            "is_publish": true
          }
        ]
      }
    ],
  }
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const mappedEconomicCalendars = useMemo(() => {
    const t = data.data.data.map(t => [t.date, ...t.event]).flat();
    return t;
  }, []);
  const stickyHeaderIndices = mappedEconomicCalendars.flatMap((t, idx) => {
    return typeof t === 'string' ? [idx] : [];
  });
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <FlashList
      stickyHeaderIndices={stickyHeaderIndices}
      data={mappedEconomicCalendars}
      estimatedItemSize={100}
      
      renderItem={({ item, index }) => <RenderItem index={index} item={item} />}
      getItemType={item => {
        // To achieve better performance, specify the type based on the item
        return typeof item === 'string' ? 'sectionHeader' : 'row';
      }}
    />

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  dateSectionContainer: {
    paddingHorizontal: (12),
    paddingVertical: (12),
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopColor: '#ffffff12',
    borderTopWidth: 1,
  },
  dateTitle: { color: 'white', fontSize: (14) },
  dateSubtitle: { color: '#ACB8C1', fontSize: (14) },
  roundedContainer: {
    borderRadius: 120,
    width: 20,
    height: 20,
    resizeMode: 'cover',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  badgeContainer: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  label: {
    fontSize: (12),
  },
});

function DateSection({ date }: { date: string }) {
  const m = moment(date);
  const day = m.format('dddd');
  const fullDate = m.format('DD MMMM YYYY');
  return (
    <View style={styles.dateSectionContainer}>
      <View>
        <Text style={styles.dateTitle}>
          {day} <Text style={styles.dateSubtitle}> • {fullDate}</Text>
        </Text>
      </View>
    </View>
  );
}


type StatusBadge = 'High' | 'Medium' | 'Low' | 'published';

const status = {
  High: {
    text: 'High',
    bgColor: 'rgba(226, 78, 111, 0.1)',
    textColor: '#E24E6F',
  },
  Medium: {
    text: 'Medium',
    bgColor: 'rgba(255, 186, 15, 0.1)',
    textColor: '#4E7DB6',
  },
  Low: {
    text: 'Low',
    bgColor: 'background: rgba(78, 125, 182, 0.1)',
    textColor: '#FFB600',
  },
};

const calendarItemStyle = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: (12),
  },
  card: {
    backgroundColor: '#18232F',
    borderRadius: (10),
    paddingVertical: (12),
    paddingHorizontal: (12),
    rowGap: (8),
    // borderLeftWidth: 5,
  },
  accentCard: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 6,
    zIndex: -1,
    right: (4),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: (6),
    alignItems: 'center',
  },
  leftOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(14,17,17, 0.4)',
    width: '100%',
    height: '100%',
    zIndex: 2,
    right: (4),
  },
  rightOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(14,17,17, 0.4)',
    width: (4),
    height: '100%',
    zIndex: 4,
    right: 0,
    borderTopRightRadius: 4,
    borderBottomEndRadius: 4,
  },
  whiteLabel: {
    color: 'white',
  },
  labelInput: { color: '#ACB8C1' },
  smallLabelInput: {
    color: '#ACB8C1',
    fontSize: (10),
  },
});


export interface iHighImpactEvent {
  actual: string;
  country: string;
  country_url: string;
  description: string;
  event_id: number;
  is_publish: boolean;
  forecast: string;
  impact: string;
  previous: string;
  time: string;
  title: string;
}
function CalendarItem({
  data,
  containerStyle = {},
  isDetailed = true,
  index
}: {
  data: iHighImpactEvent;
  containerStyle?: ViewStyle;
  isDetailed?: boolean;
  index: number;
}) {
  const {
    impact,
    country_url,
    country,
    time,
    title,
    is_publish,
    actual,
    forecast,
    previous,
    event_id
  } = data;
  const type = impact as StatusBadge;
  const { textColor } = useMemo(() => status[type], [type]);
  const displayedDate = isDetailed
    ? moment(time).format('HH:mm')
    : moment(time).format('DD MMMM YYYY, hh:mm');

  const borderStyle: ViewStyle = isDetailed
    ? {
      borderColor: textColor,
      borderLeftWidth: 5,
    }
    : {
      borderRightColor: 'rgba(255,255,255,0.2)',
      borderBottomColor: 'rgba(255,255,255,0.2)',
      borderTopColor: 'rgba(255,255,255,0.2)',
      borderLeftColor: textColor,
      borderWidth: 1,
      borderLeftWidth: 7,
    };

  return (
    <TouchableOpacity onPress={(ev) => { }}>
      <View style={[calendarItemStyle.container, containerStyle]}>
        <View>
          <View style={[calendarItemStyle.card, borderStyle]}>
            <View style={calendarItemStyle.titleContainer}>
              <View style={calendarItemStyle.countryContainer}>
                <RoundedCountryFlag key={event_id} uri={country_url} />
                <Text style={calendarItemStyle.whiteLabel}>{country}</Text>
                {isDetailed && <SeverityBadge type={type} />}
                {is_publish && <SeverityBadge type={'published'} />}
              </View>
              <Text
                style={isDetailed ? calendarItemStyle.whiteLabel : calendarItemStyle.smallLabelInput}>
                {displayedDate}
              </Text>
            </View>
            <Text style={calendarItemStyle.whiteLabel}>
              {index}
            </Text>
            {isDetailed && (
              <StatisticCards
                items={[
                  { label: 'Actual', value: actual ?? '-' },
                  { label: 'Forecast', value: forecast },
                  { label: 'Previous', value: previous },
                ]}
              />
            )}
          </View>
          {is_publish && (
            <>
              <View style={calendarItemStyle.leftOverlay} />
              <View style={calendarItemStyle.rightOverlay} />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

function RenderItem({ item, index }: { item: string | iHighImpactEvent; index: number }) {
  console.log("render item", item)
  const isHeader = typeof item === 'string';
  if (isHeader) {
    return <DateSection date={item} />;
  } else {
    return (
      <CalendarItem index={index} containerStyle={{ marginVertical: (4) }} data={item} />
    );
  }
}

function StatisticCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <View style={cardStyles.cardContainer}>
      <Text style={cardStyles.label}>{label}</Text>
      <Text style={cardStyles.value}>
        {value}
      </Text>
    </View>
  );
}

interface DropdownItem {
  label: string;
  value: string;
}
interface iStaticCardsProps {
  items: Array<DropdownItem>;
}

function StatisticCards({ items }: iStaticCardsProps) {
  return (
    <View style={cardStyles.cardListContainer}>
      {items.map(item => (
        <StatisticCard label={item.label} value={item.value} />
      ))}
    </View>
  );
}

const cardStyles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingVertical: 4,
    backgroundColor: '#141E28',
    alignItems: 'center',
    rowGap: 2,
    borderRadius: 4,
    height: '100%',
  },
  label: {
    color: '#ACB8C1',
    fontSize: (10),
  },
  value: {
    color: 'white',
  },
  cardListContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
  },
});

function RoundedCountryFlag({
  size = 18,
  uri = 'https://placeholder.pics/svg/300',
}: {
  uri: string;
  size?: number;
}) {
  return (
    <SvgUri
      uri={uri}
      
      width={"10%"}
      height={"10%"}
      style={styles.roundedContainer}
    />
    // <Image
    //   source={{ uri: "https://placehold.co/600x400" }}
    //   width={18}
    //   height={18}
    //   resizeMode='contain'
    // />
  );
}

function SeverityBadge({ type }: { type: StatusBadge }) {
  const status = {
    High: {
      text: 'High',
      bgColor: { backgroundColor: 'rgba(226, 78, 111, 0.1)' },
      textColor: { color: '#E97C94' },
    },
    Medium: {
      text: 'Medium',
      bgColor: { backgroundColor: 'rgba(255, 186, 15, 0.1)' },
      textColor: { color: '#FFC942' },
    },
    Low: {
      text: 'Low',
      bgColor: { backgroundColor: 'background: rgba(78, 125, 182, 0.1)' },
      textColor: { color: '#96B2D4' },
    },
    published: {
      text: 'Published',
      bgColor: { backgroundColor: '#212F40' },
      textColor: { color: '#ACB8C1' },
    },
  };
  const selectedStatus = status[type];
  return (
    <View style={[selectedStatus.bgColor, styles.badgeContainer]}>
      <Text style={[selectedStatus.textColor, styles.label]}>
        {selectedStatus.text}
      </Text>
    </View>
  );
}


export default App;

