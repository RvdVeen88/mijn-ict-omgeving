// Instellingen voor Mijn ICT-Omgeving. Hier staat bewust GEEN client secret in (die staat alleen in Azure).
// Laat een regel weg of zet // ervoor om de standaardwaarde te gebruiken.
window.MIJNICT_CONFIG = {
  // GetConnector die alleen de ingelogde gebruiker teruggeeft (filter Gebruiker = [Gebruiker])
  connIk: 'PowerBI_ICT_Gebruikers',
  // statussen per categorie: gelijk houden aan het SLA-dashboard (Config.js, blok Algemeen)
  st_nieuw: 'Nieuw',
  st_opvolging: 'In behandeling, Opvolging',
  st_melder: 'Wachten op melder',
  st_leverancier: 'Wachten op leverancier',
  st_afgesloten: 'Afgehandeld, Gesloten, Afgesloten',
  // normen (werkuren/werkdagen, ma-vr 08:00-17:30)
  nieuwUren: 2, opvolgingDagen: 6, melderDagen: 5, leverancierDagen: 5,
  // link naar het ticket in AFAS; {sbid} wordt vervangen door het interne nummer. Leeg = geen link.
  ticketUrl: ''
};
