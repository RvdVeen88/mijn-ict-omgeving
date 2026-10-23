// Instellingen voor Mijn ICT-Omgeving. Hier staat bewust GEEN client secret in (die staat alleen in Azure).
// Laat een regel weg of zet // ervoor om de standaardwaarde te gebruiken.
window.MIJNICT_CONFIG = {
  // GetConnector die alleen de ingelogde gebruiker teruggeeft (filter Gebruiker = [Gebruiker])
  connIk: 'PowerBI_ICT_Gebruikers',
  // SLA-regels: GELIJK aan het blok Algemeen in Config.js van de ICT-dashboards (Werksite > Dashboards afdeling ICT)
  st_nieuw: 'Open',
  st_opvolging: 'In behandeling ICT, ICT, Leidinggevende',
  st_melder: 'In afwachting melder',
  st_leverancier: 'In afwachting leverancier',
  st_afgesloten: 'Afgehandeld, Gesloten',
  // normen (werkuren/werkdagen, ma-vr 07:30-17:30)
  nieuwUren: 2, opvolgingDagen: 4, melderDagen: 5, leverancierDagen: 5, werkBegin: '07:30', werkEind: '17:30',
  // niet meetellen: deze waarden in Focusgebied ICT (zelfde als afdVeld/afdVerbergen in Config.js)
  afdVerbergenVeld: 'Focusgebied_ICT', afdVerbergen: 'Zorgadministratie, Power BI',
  // link naar het ticket in AFAS (icoontje rechtsboven in een ticket); {sbid} = intern nummer. Leeg = standaard InSite-link.
  ticketUrl: 'https://88406.afasinsite.nl/aanvraag-ict/beoordelen-aanvraag-ict?SbId={sbid}'
};
