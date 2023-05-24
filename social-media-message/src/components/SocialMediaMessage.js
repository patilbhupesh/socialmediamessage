import React, { useEffect, useState } from 'react'
import whatsappLogo from "../assets/whatsapp-png-logo.png";

export default function SocialMediaMessage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [href, setHref] = useState();
  const [dialCode, setDialCode] = useState('+93');

  useEffect(() => {
    setDialCode(document.getElementById("countryCodeOptions").value)
  }, [])


  const countryData = [
    {
      name: `Afghanistan`,
      currencyCode: `AFN`,
      code: `AF`,
      dial_code: `+93`,
      timezone: `GMT+04:30`,
      flagImg: `flag_af.png`
    },
    {
      name: `Åland Islands`,
      currencyCode: `EUR`,
      code: `AX`,
      dial_code: `+358`,
      timezone: `GMT+02:00`
    },
    {
      name: `Albania`,
      currencyCode: `ALL`,
      code: `AL`,
      dial_code: `+355`,
      timezone: `GMT+01:00`,
      flagImg: `flag_al.png`
    },
    {
      name: `Algeria`,
      currencyCode: `DZD`,
      code: `DZ`,
      dial_code: `+213`,
      timezone: `GMT+01:00`,
      flagImg: `flag_dz.png`
    },
    {
      name: `American Samoa`,
      currencyCode: `USD`,
      code: `AS`,
      dial_code: `+1684`,
      timezone: `GMT-11:00`,
      flagImg: `flag_as.png`
    },
    {
      name: `Andorra`,
      currencyCode: `EUR`,
      code: `AD`,
      dial_code: `+376`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ad.png`
    },
    {
      name: `Angola`,
      currencyCode: `AOA`,
      code: `AO`,
      dial_code: `+244`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ao.png`
    },
    {
      name: `Anguilla`,
      currencyCode: `XCD`,
      code: `AI`,
      dial_code: `+1264`,
      timezone: `GMT-04:00`,
      flagImg: `flag_ai.png`
    },
    {
      name: `Antarctica`,
      currencyCode: `AUD`,
      code: `AQ`,
      dial_code: `+672`,
      timezone: `GMT-03:00`,
      flagImg: `flag_aq.png`
    },
    {
      name: `Antigua and Barbuda`,
      currencyCode: `XCD`,
      code: `AG`,
      dial_code: `+1268`,
      timezone: `GMT-04:00`,
      flagImg: `flag_ag.png`
    },
    {
      name: `Argentina`,
      currencyCode: `ARS`,
      code: `AR`,
      dial_code: `+54`,
      timezone: `GMT-03:00`,
      flagImg: `flag_ar.png`
    },
    {
      name: `Armenia`,
      currencyCode: `AMD`,
      code: `AM`,
      dial_code: `+374`,
      timezone: `GMT+04:00`,
      flagImg: `flag_am.png`
    },
    {
      name: `Aruba`,
      currencyCode: `AWG`,
      code: `AW`,
      dial_code: `+297`,
      timezone: `GMT-04:00`,
      flagImg: `flag_aw.png`
    },
    {
      name: `Australia`,
      currencyCode: `AUD`,
      code: `AU`,
      dial_code: `+61`,
      timezone: `GMT+05:00`,
      flagImg: `flag_au.png`
    },
    {
      name: `Austria`,
      currencyCode: `EUR`,
      code: `AT`,
      dial_code: `+43`,
      timezone: `GMT+01:00`,
      flagImg: `flag_at.png`
    },
    {
      name: `Azerbaijan`,
      currencyCode: `AZN`,
      code: `AZ`,
      dial_code: `+994`,
      timezone: `GMT+04:00`,
      flagImg: `flag_az.png`
    },
    {
      name: `Bahamas`,
      currencyCode: `BSD`,
      code: `BS`,
      dial_code: `+1242`,
      timezone: `GMT-05:00`,
      flagImg: `flag_bs.png`
    },
    {
      name: `Bahrain`,
      currencyCode: `BHD`,
      code: `BH`,
      dial_code: `+973`,
      timezone: `GMT+03:00`,
      flagImg: `flag_bh.png`
    },
    {
      name: `Bangladesh`,
      currencyCode: `BDT`,
      code: `BD`,
      dial_code: `+880`,
      timezone: `GMT+06:00`,
      flagImg: `flag_bd.png`
    },
    {
      name: `Barbados`,
      currencyCode: `BBD`,
      code: `BB`,
      dial_code: `+1246`,
      timezone: `GMT-04:00`,
      flagImg: `flag_bb.png`
    },
    {
      name: `Belarus`,
      currencyCode: `BYN`,
      code: `BY`,
      dial_code: `+375`,
      timezone: `GMT+03:00`,
      flagImg: `flag_by.png`
    },
    {
      name: `Belgium`,
      currencyCode: `EUR`,
      code: `BE`,
      dial_code: `+32`,
      timezone: `GMT+01:00`,
      flagImg: `flag_be.png`
    },
    {
      name: `Belize`,
      currencyCode: `BZD`,
      code: `BZ`,
      dial_code: `+501`,
      timezone: `GMT-06:00`,
      flagImg: `flag_bz.png`
    },
    {
      name: `Benin`,
      currencyCode: `XOF`,
      code: `BJ`,
      dial_code: `+229`,
      timezone: `GMT+01:00`,
      flagImg: `flag_bj.png`
    },
    {
      name: `Bermuda`,
      currencyCode: `BMD`,
      code: `BM`,
      dial_code: `+1441`,
      timezone: `GMT-04:00`,
      flagImg: `flag_bm.png`
    },
    {
      name: `Bhutan`,
      currencyCode: `BTN`,
      code: `BT`,
      dial_code: `+975`,
      timezone: `GMT+06:00`,
      flagImg: `flag_bt.png`
    },
    {
      name: `Bolivia (Plurinational State of)`,
      currencyCode: `BOB`,
      code: `BO`,
      dial_code: `+591`,
      timezone: `GMT-04:00`,
      flagImg: `flag_bo.png`
    },
    {
      name: `Bonaire, Sint Eustatius and Saba`,
      currencyCode: `USD`,
      code: `BQ`,
      dial_code: `+5997`,
      timezone: `GMT-04:00`
    },
    {
      name: `Bosnia and Herzegovina`,
      currencyCode: `BAM`,
      code: `BA`,
      dial_code: `+387`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ba.png`
    },
    {
      name: `Botswana`,
      currencyCode: `BWP`,
      code: `BW`,
      dial_code: `+267`,
      timezone: `GMT+02:00`,
      flagImg: `flag_bw.png`
    },
    {
      name: `Brazil`,
      currencyCode: `BRL`,
      code: `BR`,
      dial_code: `+55`,
      timezone: `GMT-05:00`,
      flagImg: `flag_br.png`
    },
    {
      name: `British Indian Ocean Territory`,
      currencyCode: `USD`,
      code: `IO`,
      dial_code: `+246`,
      timezone: `GMT+06:00`,
      flagImg: `flag_io.png`
    },
    {
      name: `United States Minor Outlying Islands`,
      currencyCode: `USD`,
      code: `UM`,
      dial_code: `+246`,
      timezone: `GMT-11:00`,
      flagImg: `flag_um.png`
    },
    {
      name: `Virgin Islands (British)`,
      currencyCode: `USD`,
      code: `VG`,
      dial_code: `+1284`,
      timezone: `GMT-04:00`,
      flagImg: `flag_vg.png`
    },
    {
      name: `Virgin Islands (U.S.)`,
      currencyCode: `USD`,
      code: `VI`,
      dial_code: `+1 340`,
      timezone: `GMT-04:00`,
      flagImg: `flag_vi.png`
    },
    {
      name: `Brunei Darussalam`,
      currencyCode: `BND`,
      code: `BN`,
      dial_code: `+673`,
      timezone: `GMT+08:00`,
      flagImg: `flag_bn.png`
    },
    {
      name: `Bulgaria`,
      currencyCode: `BGN`,
      code: `BG`,
      dial_code: `+359`,
      timezone: `GMT+02:00`,
      flagImg: `flag_bg.png`
    },
    {
      name: `Burkina Faso`,
      currencyCode: `XOF`,
      code: `BF`,
      dial_code: `+226`,
      timezone: `GMT`,
      flagImg: `flag_bf.png`
    },
    {
      name: `Burundi`,
      currencyCode: `BIF`,
      code: `BI`,
      dial_code: `+257`,
      timezone: `GMT+02:00`,
      flagImg: `flag_bi.png`
    },
    {
      name: `Cambodia`,
      currencyCode: `KHR`,
      code: `KH`,
      dial_code: `+855`,
      timezone: `GMT+07:00`,
      flagImg: `flag_kh.png`
    },
    {
      name: `Cameroon`,
      currencyCode: `XAF`,
      code: `CM`,
      dial_code: `+237`,
      timezone: `GMT+01:00`,
      flagImg: `flag_cm.png`
    },
    {
      name: `Canada`,
      currencyCode: `CAD`,
      code: `CA`,
      dial_code: `+1`,
      timezone: `GMT-08:00`,
      flagImg: `flag_ca.png`
    },
    {
      name: `Cabo Verde`,
      currencyCode: `CVE`,
      code: `CV`,
      dial_code: `+238`,
      timezone: `GMT-01:00`,
      flagImg: `flag_cv.png`
    },
    {
      name: `Cayman Islands`,
      currencyCode: `KYD`,
      code: `KY`,
      dial_code: `+1345`,
      timezone: `GMT-05:00`,
      flagImg: `flag_ky.png`
    },
    {
      name: `Central African Republic`,
      currencyCode: `XAF`,
      code: `CF`,
      dial_code: `+236`,
      timezone: `GMT+01:00`,
      flagImg: `flag_cf.png`
    },
    {
      name: `Chad`,
      currencyCode: `XAF`,
      code: `TD`,
      dial_code: `+235`,
      timezone: `GMT+01:00`,
      flagImg: `flag_td.png`
    },
    {
      name: `Chile`,
      currencyCode: `CLP`,
      code: `CL`,
      dial_code: `+56`,
      timezone: `GMT-06:00`,
      flagImg: `flag_cl.png`
    },
    {
      name: `China`,
      currencyCode: `CNY`,
      code: `CN`,
      dial_code: `+86`,
      timezone: `GMT+08:00`,
      flagImg: `flag_cn.png`
    },
    {
      name: `Christmas Island`,
      currencyCode: `AUD`,
      code: `CX`,
      dial_code: `+61`,
      timezone: `GMT+07:00`,
      flagImg: `flag_cx.png`
    },
    {
      name: `Cocos (Keeling) Islands`,
      currencyCode: `AUD`,
      code: `CC`,
      dial_code: `+61`,
      timezone: `GMT+06:30`,
      flagImg: `flag_cc.png`
    },
    {
      name: `Colombia`,
      currencyCode: `COP`,
      code: `CO`,
      dial_code: `+57`,
      timezone: `GMT-05:00`,
      flagImg: `flag_co.png`
    },
    {
      name: `Comoros`,
      currencyCode: `KMF`,
      code: `KM`,
      dial_code: `+269`,
      timezone: `GMT+03:00`,
      flagImg: `flag_km.png`
    },
    {
      name: `Congo`,
      currencyCode: `XAF`,
      code: `CG`,
      dial_code: `+242`,
      timezone: `GMT+01:00`,
      flagImg: `flag_cg.png`
    },
    {
      name: `Congo (Democratic Republic of the)`,
      currencyCode: `CDF`,
      code: `CD`,
      dial_code: `+243`,
      timezone: `GMT+01:00`,
      flagImg: `flag_cd.png`
    },
    {
      name: `Cook Islands`,
      currencyCode: `NZD`,
      code: `CK`,
      dial_code: `+682`,
      timezone: `GMT-10:00`,
      flagImg: `flag_ck.png`
    },
    {
      name: `Costa Rica`,
      currencyCode: `CRC`,
      code: `CR`,
      dial_code: `+506`,
      timezone: `GMT-06:00`,
      flagImg: `flag_cr.png`
    },
    {
      name: `Croatia`,
      currencyCode: `HRK`,
      code: `HR`,
      dial_code: `+385`,
      timezone: `GMT+01:00`,
      flagImg: `flag_hr.png`
    },
    {
      name: `Cuba`,
      currencyCode: `CUC`,
      code: `CU`,
      dial_code: `+53`,
      timezone: `GMT-05:00`,
      flagImg: `flag_cu.png`
    },
    {
      name: `Curaçao`,
      currencyCode: `ANG`,
      code: `CW`,
      dial_code: `+599`,
      timezone: `GMT-04:00`
    },
    {
      name: `Cyprus`,
      currencyCode: `EUR`,
      code: `CY`,
      dial_code: `+357`,
      timezone: `GMT+02:00`,
      flagImg: `flag_cy.png`
    },
    {
      name: `Czech Republic`,
      currencyCode: `CZK`,
      code: `CZ`,
      dial_code: `+420`,
      timezone: `GMT+01:00`,
      flagImg: `flag_cz.png`
    },
    {
      name: `Denmark`,
      currencyCode: `DKK`,
      code: `DK`,
      dial_code: `+45`,
      timezone: `GMT-04:00`,
      flagImg: `flag_dk.png`
    },
    {
      name: `Djibouti`,
      currencyCode: `DJF`,
      code: `DJ`,
      dial_code: `+253`,
      timezone: `GMT+03:00`,
      flagImg: `flag_dj.png`
    },
    {
      name: `Dominica`,
      currencyCode: `XCD`,
      code: `DM`,
      dial_code: `+1767`,
      timezone: `GMT-04:00`,
      flagImg: `flag_dm.png`
    },
    {
      name: `Dominican Republic`,
      currencyCode: `DOP`,
      code: `DO`,
      dial_code: `+1809`,
      timezone: `GMT-04:00`,
      flagImg: `flag_do.png`
    },
    {
      name: `Ecuador`,
      currencyCode: `USD`,
      code: `EC`,
      dial_code: `+593`,
      timezone: `GMT-06:00`,
      flagImg: `flag_ec.png`
    },
    {
      name: `Egypt`,
      currencyCode: `EGP`,
      code: `EG`,
      dial_code: `+20`,
      timezone: `GMT+02:00`,
      flagImg: `flag_eg.png`
    },
    {
      name: `El Salvador`,
      currencyCode: `USD`,
      code: `SV`,
      dial_code: `+503`,
      timezone: `GMT-06:00`,
      flagImg: `flag_sv.png`
    },
    {
      name: `Equatorial Guinea`,
      currencyCode: `XAF`,
      code: `GQ`,
      dial_code: `+240`,
      timezone: `GMT+01:00`,
      flagImg: `flag_gq.png`
    },
    {
      name: `Eritrea`,
      currencyCode: `ERN`,
      code: `ER`,
      dial_code: `+291`,
      timezone: `GMT+03:00`,
      flagImg: `flag_er.png`
    },
    {
      name: `Estonia`,
      currencyCode: `EUR`,
      code: `EE`,
      dial_code: `+372`,
      timezone: `GMT+02:00`,
      flagImg: `flag_ee.png`
    },
    {
      name: `Ethiopia`,
      currencyCode: `ETB`,
      code: `ET`,
      dial_code: `+251`,
      timezone: `GMT+03:00`,
      flagImg: `flag_et.png`
    },
    {
      name: `Falkland Islands (Malvinas)`,
      currencyCode: `FKP`,
      code: `FK`,
      dial_code: `+500`,
      timezone: `GMT-04:00`,
      flagImg: `flag_fk.png`
    },
    {
      name: `Faroe Islands`,
      currencyCode: `DKK`,
      code: `FO`,
      dial_code: `+298`,
      timezone: `GMT+00:00`,
      flagImg: `flag_fo.png`
    },
    {
      name: `Fiji`,
      currencyCode: `FJD`,
      code: `FJ`,
      dial_code: `+679`,
      timezone: `GMT+12:00`,
      flagImg: `flag_fj.png`
    },
    {
      name: `Finland`,
      currencyCode: `EUR`,
      code: `FI`,
      dial_code: `+358`,
      timezone: `GMT+02:00`,
      flagImg: `flag_fi.png`
    },
    {
      name: `France`,
      currencyCode: `EUR`,
      code: `FR`,
      dial_code: `+33`,
      timezone: `GMT-10:00`,
      flagImg: `flag_fr.png`
    },
    {
      name: `French Guiana`,
      currencyCode: `EUR`,
      code: `GF`,
      dial_code: `+594`,
      timezone: `GMT-03:00`,
      flagImg: `flag_gf.png`
    },
    {
      name: `French Polynesia`,
      currencyCode: `XPF`,
      code: `PF`,
      dial_code: `+689`,
      timezone: `GMT-10:00`,
      flagImg: `flag_pf.png`
    },
    {
      name: `Gabon`,
      currencyCode: `XAF`,
      code: `GA`,
      dial_code: `+241`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ga.png`
    },
    {
      name: `Gambia`,
      currencyCode: `GMD`,
      code: `GM`,
      dial_code: `+220`,
      timezone: `GMT+00:00`,
      flagImg: `flag_gm.png`
    },
    {
      name: `Georgia`,
      currencyCode: `GEL`,
      code: `GE`,
      dial_code: `+995`,
      timezone: `GMT-05:00`,
      flagImg: `flag_ge.png`
    },
    {
      name: `Germany`,
      currencyCode: `EUR`,
      code: `DE`,
      dial_code: `+49`,
      timezone: `GMT+01:00`,
      flagImg: `flag_de.png`
    },
    {
      name: `Ghana`,
      currencyCode: `GHS`,
      code: `GH`,
      dial_code: `+233`,
      timezone: `GMT`,
      flagImg: `flag_gh.png`
    },
    {
      name: `Gibraltar`,
      currencyCode: `GIP`,
      code: `GI`,
      dial_code: `+350`,
      timezone: `GMT+01:00`,
      flagImg: `flag_gi.png`
    },
    {
      name: `Greece`,
      currencyCode: `EUR`,
      code: `GR`,
      dial_code: `+30`,
      timezone: `GMT+02:00`,
      flagImg: `flag_gr.png`
    },
    {
      name: `Greenland`,
      currencyCode: `DKK`,
      code: `GL`,
      dial_code: `+299`,
      timezone: `GMT-04:00`,
      flagImg: `flag_gl.png`
    },
    {
      name: `Grenada`,
      currencyCode: `XCD`,
      code: `GD`,
      dial_code: `+1473`,
      timezone: `GMT-04:00`,
      flagImg: `flag_gd.png`
    },
    {
      name: `Guadeloupe`,
      currencyCode: `EUR`,
      code: `GP`,
      dial_code: `+590`,
      timezone: `GMT-04:00`,
      flagImg: `flag_gp.png`
    },
    {
      name: `Guam`,
      currencyCode: `USD`,
      code: `GU`,
      dial_code: `+1671`,
      timezone: `GMT+10:00`,
      flagImg: `flag_gu.png`
    },
    {
      name: `Guatemala`,
      currencyCode: `GTQ`,
      code: `GT`,
      dial_code: `+502`,
      timezone: `GMT-06:00`,
      flagImg: `flag_gt.png`
    },
    {
      name: `Guernsey`,
      currencyCode: `GBP`,
      code: `GG`,
      dial_code: `+44`,
      timezone: `GMT+00:00`,
      flagImg: `flag_gg.png`
    },
    {
      name: `Guinea`,
      currencyCode: `GNF`,
      code: `GN`,
      dial_code: `+224`,
      timezone: `GMT`,
      flagImg: `flag_gn.png`
    },
    {
      name: `Guinea-Bissau`,
      currencyCode: `XOF`,
      code: `GW`,
      dial_code: `+245`,
      timezone: `GMT`,
      flagImg: `flag_gw.png`
    },
    {
      name: `Guyana`,
      currencyCode: `GYD`,
      code: `GY`,
      dial_code: `+592`,
      timezone: `GMT-04:00`,
      flagImg: `flag_gy.png`
    },
    {
      name: `Haiti`,
      currencyCode: `HTG`,
      code: `HT`,
      dial_code: `+509`,
      timezone: `GMT-05:00`,
      flagImg: `flag_ht.png`
    },
    {
      name: `Holy See`,
      currencyCode: `EUR`,
      code: `VA`,
      dial_code: `+379`,
      timezone: `GMT+01:00`,
      flagImg: `flag_va.png`
    },
    {
      name: `Honduras`,
      currencyCode: `HNL`,
      code: `HN`,
      dial_code: `+504`,
      timezone: `GMT-06:00`,
      flagImg: `flag_hn.png`
    },
    {
      name: `Hong Kong`,
      currencyCode: `HKD`,
      code: `HK`,
      dial_code: `+852`,
      timezone: `GMT+08:00`,
      flagImg: `flag_hk.png`
    },
    {
      name: `Hungary`,
      currencyCode: `HUF`,
      code: `HU`,
      dial_code: `+36`,
      timezone: `GMT+01:00`,
      flagImg: `flag_hu.png`
    },
    {
      name: `Iceland`,
      currencyCode: `ISK`,
      code: `IS`,
      dial_code: `+354`,
      timezone: `GMT`,
      flagImg: `flag_is.png`
    },
    {
      name: `India`,
      currencyCode: `INR`,
      code: `IN`,
      dial_code: `+91`,
      timezone: `GMT+05:30`,
      flagImg: `flag_in.png`
    },
    {
      name: `Indonesia`,
      currencyCode: `IDR`,
      code: `ID`,
      dial_code: `+62`,
      timezone: `GMT+07:00`,
      flagImg: `flag_id.png`
    },
    {
      name: `Côte d'Ivoire`,
      currencyCode: `XOF`,
      code: `CI`,
      dial_code: `+225`,
      timezone: `GMT`,
      flagImg: `flag_ci.png`
    },
    {
      name: `Iran (Islamic Republic of)`,
      currencyCode: `IRR`,
      code: `IR`,
      dial_code: `+98`,
      timezone: `GMT+03:30`,
      flagImg: `flag_ir.png`
    },
    {
      name: `Iraq`,
      currencyCode: `IQD`,
      code: `IQ`,
      dial_code: `+964`,
      timezone: `GMT+03:00`,
      flagImg: `flag_iq.png`
    },
    {
      name: `Ireland`,
      currencyCode: `EUR`,
      code: `IE`,
      dial_code: `+353`,
      timezone: `GMT`,
      flagImg: `flag_ie.png`
    },
    {
      name: `Isle of Man`,
      currencyCode: `GBP`,
      code: `IM`,
      dial_code: `+44`,
      timezone: `GMT+00:00`,
      flagImg: `flag_im.png`
    },
    {
      name: `Israel`,
      currencyCode: `ILS`,
      code: `IL`,
      dial_code: `+972`,
      timezone: `GMT+02:00`,
      flagImg: `flag_il.png`
    },
    {
      name: `Italy`,
      currencyCode: `EUR`,
      code: `IT`,
      dial_code: `+39`,
      timezone: `GMT+01:00`,
      flagImg: `flag_it.png`
    },
    {
      name: `Jamaica`,
      currencyCode: `JMD`,
      code: `JM`,
      dial_code: `+1876`,
      timezone: `GMT-05:00`,
      flagImg: `flag_jm.png`
    },
    {
      name: `Japan`,
      currencyCode: `JPY`,
      code: `JP`,
      dial_code: `+81`,
      timezone: `GMT+09:00`,
      flagImg: `flag_jp.png`
    },
    {
      name: `Jersey`,
      currencyCode: `GBP`,
      code: `JE`,
      dial_code: `+44`,
      timezone: `GMT+01:00`,
      flagImg: `flag_je.png`
    },
    {
      name: `Jordan`,
      currencyCode: `JOD`,
      code: `JO`,
      dial_code: `+962`,
      timezone: `GMT+03:00`,
      flagImg: `flag_jo.png`
    },
    {
      name: `Kazakhstan`,
      currencyCode: `KZT`,
      code: `KZ`,
      dial_code: `+76`,
      timezone: `GMT+05:00`,
      flagImg: `flag_kz.png`
    },
    {
      name: `Kenya`,
      currencyCode: `KES`,
      code: `KE`,
      dial_code: `+254`,
      timezone: `GMT+03:00`,
      flagImg: `flag_ke.png`
    },
    {
      name: `Kiribati`,
      currencyCode: `AUD`,
      code: `KI`,
      dial_code: `+686`,
      timezone: `GMT+12:00`,
      flagImg: `flag_ki.png`
    },
    {
      name: `Kuwait`,
      currencyCode: `KWD`,
      code: `KW`,
      dial_code: `+965`,
      timezone: `GMT+03:00`,
      flagImg: `flag_kw.png`
    },
    {
      name: `Kyrgyzstan`,
      currencyCode: `KGS`,
      code: `KG`,
      dial_code: `+996`,
      timezone: `GMT+06:00`,
      flagImg: `flag_kg.png`
    },
    {
      name: `Lao People's Democratic Republic`,
      currencyCode: `LAK`,
      code: `LA`,
      dial_code: `+856`,
      timezone: `GMT+07:00`,
      flagImg: `flag_la.png`
    },
    {
      name: `Latvia`,
      currencyCode: `EUR`,
      code: `LV`,
      dial_code: `+371`,
      timezone: `GMT+02:00`,
      flagImg: `flag_lv.png`
    },
    {
      name: `Lebanon`,
      currencyCode: `LBP`,
      code: `LB`,
      dial_code: `+961`,
      timezone: `GMT+02:00`,
      flagImg: `flag_lb.png`
    },
    {
      name: `Lesotho`,
      currencyCode: `LSL`,
      code: `LS`,
      dial_code: `+266`,
      timezone: `GMT+02:00`,
      flagImg: `flag_ls.png`
    },
    {
      name: `Liberia`,
      currencyCode: `LRD`,
      code: `LR`,
      dial_code: `+231`,
      timezone: `GMT`,
      flagImg: `flag_lr.png`
    },
    {
      name: `Libya`,
      currencyCode: `LYD`,
      code: `LY`,
      dial_code: `+218`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ly.png`
    },
    {
      name: `Liechtenstein`,
      currencyCode: `CHF`,
      code: `LI`,
      dial_code: `+423`,
      timezone: `GMT+01:00`,
      flagImg: `flag_li.png`
    },
    {
      name: `Lithuania`,
      currencyCode: `EUR`,
      code: `LT`,
      dial_code: `+370`,
      timezone: `GMT+02:00`,
      flagImg: `flag_lt.png`
    },
    {
      name: `Luxembourg`,
      currencyCode: `EUR`,
      code: `LU`,
      dial_code: `+352`,
      timezone: `GMT+01:00`,
      flagImg: `flag_lu.png`
    },
    {
      name: `Macao`,
      currencyCode: `MOP`,
      code: `MO`,
      dial_code: `+853`,
      timezone: `GMT+08:00`,
      flagImg: `flag_mo.png`
    },
    {
      name: `Macedonia (the former Yugoslav Republic of)`,
      currencyCode: `MKD`,
      code: `MK`,
      dial_code: `+389`,
      timezone: `GMT+01:00`,
      flagImg: `flag_mk.png`
    },
    {
      name: `Madagascar`,
      currencyCode: `MGA`,
      code: `MG`,
      dial_code: `+261`,
      timezone: `GMT+03:00`,
      flagImg: `flag_mg.png`
    },
    {
      name: `Malawi`,
      currencyCode: `MWK`,
      code: `MW`,
      dial_code: `+265`,
      timezone: `GMT+02:00`,
      flagImg: `flag_mw.png`
    },
    {
      name: `Malaysia`,
      currencyCode: `MYR`,
      code: `MY`,
      dial_code: `+60`,
      timezone: `GMT+08:00`,
      flagImg: `flag_my.png`
    },
    {
      name: `Maldives`,
      currencyCode: `MVR`,
      code: `MV`,
      dial_code: `+960`,
      timezone: `GMT+05:00`,
      flagImg: `flag_mv.png`
    },
    {
      name: `Mali`,
      currencyCode: `XOF`,
      code: `ML`,
      dial_code: `+223`,
      timezone: `GMT`,
      flagImg: `flag_ml.png`
    },
    {
      name: `Malta`,
      currencyCode: `EUR`,
      code: `MT`,
      dial_code: `+356`,
      timezone: `GMT+01:00`,
      flagImg: `flag_mt.png`
    },
    {
      name: `Marshall Islands`,
      currencyCode: `USD`,
      code: `MH`,
      dial_code: `+692`,
      timezone: `GMT+12:00`,
      flagImg: `flag_mh.png`
    },
    {
      name: `Martinique`,
      currencyCode: `EUR`,
      code: `MQ`,
      dial_code: `+596`,
      timezone: `GMT-04:00`,
      flagImg: `flag_mq.png`
    },
    {
      name: `Mauritania`,
      currencyCode: `MRO`,
      code: `MR`,
      dial_code: `+222`,
      timezone: `GMT`,
      flagImg: `flag_mr.png`
    },
    {
      name: `Mauritius`,
      currencyCode: `MUR`,
      code: `MU`,
      dial_code: `+230`,
      timezone: `GMT+04:00`,
      flagImg: `flag_mu.png`
    },
    {
      name: `Mayotte`,
      currencyCode: `EUR`,
      code: `YT`,
      dial_code: `+262`,
      timezone: `GMT+03:00`,
      flagImg: `flag_yt.png`
    },
    {
      name: `Mexico`,
      currencyCode: `MXN`,
      code: `MX`,
      dial_code: `+52`,
      timezone: `GMT-08:00`,
      flagImg: `flag_mx.png`
    },
    {
      name: `Micronesia (Federated States of)`,
      currencyCode: `USD`,
      code: `FM`,
      dial_code: `+691`,
      timezone: `GMT+10:00`,
      flagImg: `flag_fm.png`
    },
    {
      name: `Moldova (Republic of)`,
      currencyCode: `MDL`,
      code: `MD`,
      dial_code: `+373`,
      timezone: `GMT+02:00`,
      flagImg: `flag_md.png`
    },
    {
      name: `Monaco`,
      currencyCode: `EUR`,
      code: `MC`,
      dial_code: `+377`,
      timezone: `GMT+01:00`,
      flagImg: `flag_mc.png`
    },
    {
      name: `Mongolia`,
      currencyCode: `MNT`,
      code: `MN`,
      dial_code: `+976`,
      timezone: `GMT+07:00`,
      flagImg: `flag_mn.png`
    },
    {
      name: `Montenegro`,
      currencyCode: `EUR`,
      code: `ME`,
      dial_code: `+382`,
      timezone: `GMT+01:00`,
      flagImg: `flag_me.png`
    },
    {
      name: `Montserrat`,
      currencyCode: `XCD`,
      code: `MS`,
      dial_code: `+1664`,
      timezone: `GMT-04:00`,
      flagImg: `flag_ms.png`
    },
    {
      name: `Morocco`,
      currencyCode: `MAD`,
      code: `MA`,
      dial_code: `+212`,
      timezone: `GMT`,
      flagImg: `flag_ma.png`
    },
    {
      name: `Mozambique`,
      currencyCode: `MZN`,
      code: `MZ`,
      dial_code: `+258`,
      timezone: `GMT+02:00`,
      flagImg: `flag_mz.png`
    },
    {
      name: `Myanmar`,
      currencyCode: `MMK`,
      code: `MM`,
      dial_code: `+95`,
      timezone: `GMT+06:30`,
      flagImg: `flag_mm.png`
    },
    {
      name: `Namibia`,
      currencyCode: `NAD`,
      code: `NA`,
      dial_code: `+264`,
      timezone: `GMT+01:00`,
      flagImg: `flag_na.png`
    },
    {
      name: `Nauru`,
      currencyCode: `AUD`,
      code: `NR`,
      dial_code: `+674`,
      timezone: `GMT+12:00`,
      flagImg: `flag_nr.png`
    },
    {
      name: `Nepal`,
      currencyCode: `NPR`,
      code: `NP`,
      dial_code: `+977`,
      timezone: `GMT+05:45`,
      flagImg: `flag_np.png`
    },
    {
      name: `Netherlands`,
      currencyCode: `EUR`,
      code: `NL`,
      dial_code: `+31`,
      timezone: `GMT-04:00`,
      flagImg: `flag_nl.png`
    },
    {
      name: `New Caledonia`,
      currencyCode: `XPF`,
      code: `NC`,
      dial_code: `+687`,
      timezone: `GMT+11:00`,
      flagImg: `flag_nc.png`
    },
    {
      name: `New Zealand`,
      currencyCode: `NZD`,
      code: `NZ`,
      dial_code: `+64`,
      timezone: `GMT-11:00`,
      flagImg: `flag_nz.png`
    },
    {
      name: `Nicaragua`,
      currencyCode: `NIO`,
      code: `NI`,
      dial_code: `+505`,
      timezone: `GMT-06:00`,
      flagImg: `flag_ni.png`
    },
    {
      name: `Niger`,
      currencyCode: `XOF`,
      code: `NE`,
      dial_code: `+227`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ne.png`
    },
    {
      name: `Nigeria`,
      currencyCode: `NGN`,
      code: `NG`,
      dial_code: `+234`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ng.png`
    },
    {
      name: `Niue`,
      currencyCode: `NZD`,
      code: `NU`,
      dial_code: `+683`,
      timezone: `GMT-11:00`,
      flagImg: `flag_nu.png`
    },
    {
      name: `Norfolk Island`,
      currencyCode: `AUD`,
      code: `NF`,
      dial_code: `+672`,
      timezone: `GMT+11:30`,
      flagImg: `flag_nf.png`
    },
    {
      name: `Korea (Democratic People's Republic of)`,
      currencyCode: `KPW`,
      code: `KP`,
      dial_code: `+850`,
      timezone: `GMT+09:00`,
      flagImg: `flag_kp.png`
    },
    {
      name: `Northern Mariana Islands`,
      currencyCode: `USD`,
      code: `MP`,
      dial_code: `+1670`,
      timezone: `GMT+10:00`,
      flagImg: `flag_mp.png`
    },
    {
      name: `Norway`,
      currencyCode: `NOK`,
      code: `NO`,
      dial_code: `+47`,
      timezone: `GMT+01:00`,
      flagImg: `flag_no.png`
    },
    {
      name: `Oman`,
      currencyCode: `OMR`,
      code: `OM`,
      dial_code: `+968`,
      timezone: `GMT+04:00`,
      flagImg: `flag_om.png`
    },
    {
      name: `Pakistan`,
      currencyCode: `PKR`,
      code: `PK`,
      dial_code: `+92`,
      timezone: `GMT+05:00`,
      flagImg: `flag_pk.png`
    },
    {
      name: `Palau`,
      currencyCode: `(none)`,
      code: `PW`,
      dial_code: `+680`,
      timezone: `GMT+09:00`,
      flagImg: `flag_pw.png`
    },
    {
      name: `Palestine, State of`,
      currencyCode: `ILS`,
      code: `PS`,
      dial_code: `+970`,
      timezone: `GMT+02:00`,
      flagImg: `flag_ps.png`
    },
    {
      name: `Panama`,
      currencyCode: `PAB`,
      code: `PA`,
      dial_code: `+507`,
      timezone: `GMT-05:00`,
      flagImg: `flag_pa.png`
    },
    {
      name: `Papua New Guinea`,
      currencyCode: `PGK`,
      code: `PG`,
      dial_code: `+675`,
      timezone: `GMT+10:00`,
      flagImg: `flag_pg.png`
    },
    {
      name: `Paraguay`,
      currencyCode: `PYG`,
      code: `PY`,
      dial_code: `+595`,
      timezone: `GMT-04:00`,
      flagImg: `flag_py.png`
    },
    {
      name: `Peru`,
      currencyCode: `PEN`,
      code: `PE`,
      dial_code: `+51`,
      timezone: `GMT-05:00`,
      flagImg: `flag_pe.png`
    },
    {
      name: `Philippines`,
      currencyCode: `PHP`,
      code: `PH`,
      dial_code: `+63`,
      timezone: `GMT+08:00`,
      flagImg: `flag_ph.png`
    },
    {
      name: `Pitcairn`,
      currencyCode: `NZD`,
      code: `PN`,
      dial_code: `+64`,
      timezone: `GMT-08:00`,
      flagImg: `flag_pn.png`
    },
    {
      name: `Poland`,
      currencyCode: `PLN`,
      code: `PL`,
      dial_code: `+48`,
      timezone: `GMT+01:00`,
      flagImg: `flag_pl.png`
    },
    {
      name: `Portugal`,
      currencyCode: `EUR`,
      code: `PT`,
      dial_code: `+351`,
      timezone: `GMT-01:00`,
      flagImg: `flag_pt.png`
    },
    {
      name: `Puerto Rico`,
      currencyCode: `USD`,
      code: `PR`,
      dial_code: `+1787`,
      timezone: `GMT-04:00`,
      flagImg: `flag_pr.png`
    },
    {
      name: `Qatar`,
      currencyCode: `QAR`,
      code: `QA`,
      dial_code: `+974`,
      timezone: `GMT+03:00`,
      flagImg: `flag_qa.png`
    },
    {
      name: `Republic of Kosovo`,
      currencyCode: `EUR`,
      code: `XK`,
      dial_code: `+383`,
      timezone: `GMT+01:00`
    },
    {
      name: `Réunion`,
      currencyCode: `EUR`,
      code: `RE`,
      dial_code: `+262`,
      timezone: `GMT+04:00`,
      flagImg: `flag_re.png`
    },
    {
      name: `Romania`,
      currencyCode: `RON`,
      code: `RO`,
      dial_code: `+40`,
      timezone: `GMT+02:00`,
      flagImg: `flag_ro.png`
    },
    {
      name: `Russian Federation`,
      currencyCode: `RUB`,
      code: `RU`,
      dial_code: `+7`,
      timezone: `GMT+03:00`,
      flagImg: `flag_ru.png`
    },
    {
      name: `Rwanda`,
      currencyCode: `RWF`,
      code: `RW`,
      dial_code: `+250`,
      timezone: `GMT+02:00`,
      flagImg: `flag_rw.png`
    },
    {
      name: `Saint Barthélemy`,
      currencyCode: `EUR`,
      code: `BL`,
      dial_code: `+590`,
      timezone: `GMT-04:00`
    },
    {
      name: `Saint Helena, Ascension and Tristan da Cunha`,
      currencyCode: `SHP`,
      code: `SH`,
      dial_code: `+290`,
      timezone: `GMT+00:00`,
      flagImg: `flag_sh.png`
    },
    {
      name: `Saint Kitts and Nevis`,
      currencyCode: `XCD`,
      code: `KN`,
      dial_code: `+1869`,
      timezone: `GMT-04:00`,
      flagImg: `flag_kn.png`
    },
    {
      name: `Saint Lucia`,
      currencyCode: `XCD`,
      code: `LC`,
      dial_code: `+1758`,
      timezone: `GMT-04:00`,
      flagImg: `flag_lc.png`
    },
    {
      name: `Saint Martin (French part)`,
      currencyCode: `EUR`,
      code: `MF`,
      dial_code: `+590`,
      timezone: `GMT-04:00`
    },
    {
      name: `Saint Pierre and Miquelon`,
      currencyCode: `EUR`,
      code: `PM`,
      dial_code: `+508`,
      timezone: `GMT-03:00`
    },
    {
      name: `Saint Vincent and the Grenadines`,
      currencyCode: `XCD`,
      code: `VC`,
      dial_code: `+1784`,
      timezone: `GMT-04:00`,
      flagImg: `flag_vc.png`
    },
    {
      name: `Samoa`,
      currencyCode: `WST`,
      code: `WS`,
      dial_code: `+685`,
      timezone: `GMT+13:00`,
      flagImg: `flag_ws.png`
    },
    {
      name: `San Marino`,
      currencyCode: `EUR`,
      code: `SM`,
      dial_code: `+378`,
      timezone: `GMT+01:00`,
      flagImg: `flag_sm.png`
    },
    {
      name: `Sao Tome and Principe`,
      currencyCode: `STD`,
      code: `ST`,
      dial_code: `+239`,
      timezone: `GMT`,
      flagImg: `flag_st.png`
    },
    {
      name: `Saudi Arabia`,
      currencyCode: `SAR`,
      code: `SA`,
      dial_code: `+966`,
      timezone: `GMT+03:00`,
      flagImg: `flag_sa.png`
    },
    {
      name: `Senegal`,
      currencyCode: `XOF`,
      code: `SN`,
      dial_code: `+221`,
      timezone: `GMT`,
      flagImg: `flag_sn.png`
    },
    {
      name: `Serbia`,
      currencyCode: `RSD`,
      code: `RS`,
      dial_code: `+381`,
      timezone: `GMT+01:00`,
      flagImg: `flag_rs.png`
    },
    {
      name: `Seychelles`,
      currencyCode: `SCR`,
      code: `SC`,
      dial_code: `+248`,
      timezone: `GMT+04:00`,
      flagImg: `flag_sc.png`
    },
    {
      name: `Sierra Leone`,
      currencyCode: `SLL`,
      code: `SL`,
      dial_code: `+232`,
      timezone: `GMT`,
      flagImg: `flag_sl.png`
    },
    {
      name: `Singapore`,
      currencyCode: `SGD`,
      code: `SG`,
      dial_code: `+65`,
      timezone: `GMT+08:00`,
      flagImg: `flag_sg.png`
    },
    {
      name: `Sint Maarten (DGMTh part)`,
      currencyCode: `ANG`,
      code: `SX`,
      dial_code: `+1721`,
      timezone: `GMT-04:00`
    },
    {
      name: `Slovakia`,
      currencyCode: `EUR`,
      code: `SK`,
      dial_code: `+421`,
      timezone: `GMT+01:00`,
      flagImg: `flag_sk.png`
    },
    {
      name: `Slovenia`,
      currencyCode: `EUR`,
      code: `SI`,
      dial_code: `+386`,
      timezone: `GMT+01:00`,
      flagImg: `flag_si.png`
    },
    {
      name: `Solomon Islands`,
      currencyCode: `SBD`,
      code: `SB`,
      dial_code: `+677`,
      timezone: `GMT+11:00`,
      flagImg: `flag_sb.png`
    },
    {
      name: `Somalia`,
      currencyCode: `SOS`,
      code: `SO`,
      dial_code: `+252`,
      timezone: `GMT+03:00`,
      flagImg: `flag_so.png`
    },
    {
      name: `South Africa`,
      currencyCode: `ZAR`,
      code: `ZA`,
      dial_code: `+27`,
      timezone: `GMT+02:00`,
      flagImg: `flag_za.png`
    },
    {
      name: `South Georgia and the South Sandwich Islands`,
      currencyCode: `GBP`,
      code: `GS`,
      dial_code: `+500`,
      timezone: `GMT-02:00`
    },
    {
      name: `Korea (Republic of)`,
      currencyCode: `KRW`,
      code: `KR`,
      dial_code: `+82`,
      timezone: `GMT+09:00`,
      flagImg: `flag_kr.png`
    },
    {
      name: `South Sudan`,
      currencyCode: `SSP`,
      code: `SS`,
      dial_code: `+211`,
      timezone: `GMT+03:00`
    },
    {
      name: `Spain`,
      currencyCode: `EUR`,
      code: `ES`,
      dial_code: `+34`,
      timezone: `GMT`,
      flagImg: `flag_es.png`
    },
    {
      name: `Sri Lanka`,
      currencyCode: `LKR`,
      code: `LK`,
      dial_code: `+94`,
      timezone: `GMT+05:30`,
      flagImg: `flag_lk.png`
    },
    {
      name: `Sudan`,
      currencyCode: `SDG`,
      code: `SD`,
      dial_code: `+249`,
      timezone: `GMT+03:00`,
      flagImg: `flag_sd.png`
    },
    {
      name: `Suriname`,
      currencyCode: `SRD`,
      code: `SR`,
      dial_code: `+597`,
      timezone: `GMT-03:00`,
      flagImg: `flag_sr.png`
    },
    {
      name: `Svalbard and Jan Mayen`,
      currencyCode: `NOK`,
      code: `SJ`,
      dial_code: `+4779`,
      timezone: `GMT+01:00`,
      flagImg: `flag_sj.png`
    },
    {
      name: `Swaziland`,
      currencyCode: `SZL`,
      code: `SZ`,
      dial_code: `+268`,
      timezone: `GMT+02:00`,
      flagImg: `flag_sz.png`
    },
    {
      name: `Sweden`,
      currencyCode: `SEK`,
      code: `SE`,
      dial_code: `+46`,
      timezone: `GMT+01:00`,
      flagImg: `flag_se.png`
    },
    {
      name: `Switzerland`,
      currencyCode: `CHF`,
      code: `CH`,
      dial_code: `+41`,
      timezone: `GMT+01:00`,
      flagImg: `flag_ch.png`
    },
    {
      name: `Syrian Arab Republic`,
      currencyCode: `SYP`,
      code: `SY`,
      dial_code: `+963`,
      timezone: `GMT+02:00`,
      flagImg: `flag_sy.png`
    },
    {
      name: `Taiwan`,
      currencyCode: `TWD`,
      code: `TW`,
      dial_code: `+886`,
      timezone: `GMT+08:00`,
      flagImg: `flag_tw.png`
    },
    {
      name: `Tajikistan`,
      currencyCode: `TJS`,
      code: `TJ`,
      dial_code: `+992`,
      timezone: `GMT+05:00`,
      flagImg: `flag_tj.png`
    },
    {
      name: `Tanzania, United Republic of`,
      currencyCode: `TZS`,
      code: `TZ`,
      dial_code: `+255`,
      timezone: `GMT+03:00`,
      flagImg: `flag_tz.png`
    },
    {
      name: `Thailand`,
      currencyCode: `THB`,
      code: `TH`,
      dial_code: `+66`,
      timezone: `GMT+07:00`,
      flagImg: `flag_th.png`
    },
    {
      name: `Timor-Leste`,
      currencyCode: `USD`,
      code: `TL`,
      dial_code: `+670`,
      timezone: `GMT+09:00`,
      flagImg: `flag_tl.png`
    },
    {
      name: `Togo`,
      currencyCode: `XOF`,
      code: `TG`,
      dial_code: `+228`,
      timezone: `GMT`,
      flagImg: `flag_tg.png`
    },
    {
      name: `Tokelau`,
      currencyCode: `NZD`,
      code: `TK`,
      dial_code: `+690`,
      timezone: `GMT+13:00`,
      flagImg: `flag_tk.png`
    },
    {
      name: `Tonga`,
      currencyCode: `TOP`,
      code: `TO`,
      dial_code: `+676`,
      timezone: `GMT+13:00`,
      flagImg: `flag_to.png`
    },
    {
      name: `Trinidad and Tobago`,
      currencyCode: `TTD`,
      code: `TT`,
      dial_code: `+1868`,
      timezone: `GMT-04:00`,
      flagImg: `flag_tt.png`
    },
    {
      name: `Tunisia`,
      currencyCode: `TND`,
      code: `TN`,
      dial_code: `+216`,
      timezone: `GMT+01:00`,
      flagImg: `flag_tn.png`
    },
    {
      name: `Turkey`,
      currencyCode: `TRY`,
      code: `TR`,
      dial_code: `+90`,
      timezone: `GMT+03:00`,
      flagImg: `flag_tr.png`
    },
    {
      name: `Turkmenistan`,
      currencyCode: `TMT`,
      code: `TM`,
      dial_code: `+993`,
      timezone: `GMT+05:00`,
      flagImg: `flag_tm.png`
    },
    {
      name: `Turks and Caicos Islands`,
      currencyCode: `USD`,
      code: `TC`,
      dial_code: `+1649`,
      timezone: `GMT-04:00`,
      flagImg: `flag_tc.png`
    },
    {
      name: `Tuvalu`,
      currencyCode: `AUD`,
      code: `TV`,
      dial_code: `+688`,
      timezone: `GMT+12:00`,
      flagImg: `flag_tv.png`
    },
    {
      name: `Uganda`,
      currencyCode: `UGX`,
      code: `UG`,
      dial_code: `+256`,
      timezone: `GMT+03:00`,
      flagImg: `flag_ug.png`
    },
    {
      name: `Ukraine`,
      currencyCode: `UAH`,
      code: `UA`,
      dial_code: `+380`,
      timezone: `GMT+02:00`,
      flagImg: `flag_ua.png`
    },
    {
      name: `United Arab Emirates`,
      currencyCode: `AED`,
      code: `AE`,
      dial_code: `+971`,
      timezone: `GMT+04`,
      flagImg: `flag_ae.png`
    },
    {
      name: `United Kingdom of Great Britain and Northern Ireland`,
      currencyCode: `GBP`,
      code: `GB`,
      dial_code: `+44`,
      timezone: `GMT-08:00`,
      flagImg: `flag_gb.png`
    },
    {
      name: `United States of America`,
      currencyCode: `USD`,
      code: `US`,
      dial_code: `+1`,
      timezone: `GMT-12:00`,
      flagImg: `flag_us.png`
    },
    {
      name: `Uruguay`,
      currencyCode: `UYU`,
      code: `UY`,
      dial_code: `+598`,
      timezone: `GMT-03:00`,
      flagImg: `flag_uy.png`
    },
    {
      name: `Uzbekistan`,
      currencyCode: `UZS`,
      code: `UZ`,
      dial_code: `+998`,
      timezone: `GMT+05:00`,
      flagImg: `flag_uz.png`
    },
    {
      name: `Vanuatu`,
      currencyCode: `VUV`,
      code: `VU`,
      dial_code: `+678`,
      timezone: `GMT+11:00`,
      flagImg: `flag_vu.png`
    },
    {
      name: `Venezuela (Bolivarian Republic of)`,
      currencyCode: `VEF`,
      code: `VE`,
      dial_code: `+58`,
      timezone: `GMT-04:00`,
      flagImg: `flag_ve.png`
    },
    {
      name: `Viet Nam`,
      currencyCode: `VND`,
      code: `VN`,
      dial_code: `+84`,
      timezone: `GMT+07:00`,
      flagImg: `flag_vn.png`
    },
    {
      name: `Wallis and Futuna`,
      currencyCode: `XPF`,
      code: `WF`,
      dial_code: `+681`,
      timezone: `GMT+12:00`,
      flagImg: `flag_wf.png`
    },
    {
      name: `Western Sahara`,
      currencyCode: `MAD`,
      code: `EH`,
      dial_code: `+212`,
      timezone: `GMT+00:00`,
      flagImg: `flag_eh.png`
    },
    {
      name: `Yemen`,
      currencyCode: `YER`,
      code: `YE`,
      dial_code: `+967`,
      timezone: `GMT+03:00`,
      flagImg: `flag_ye.png`
    },
    {
      name: `Zambia`,
      currencyCode: `ZMW`,
      code: `ZM`,
      dial_code: `+260`,
      timezone: `GMT+02:00`,
      flagImg: `flag_zm.png`
    },
    {
      name: `Zimbabwe`,
      currencyCode: `BWP`,
      code: `ZW`,
      dial_code: `+263`,
      timezone: `GMT+02:00`,
      flagImg: `flag_zw.png`
    }
  ];

  const buttonClicked = () => {
    if (phoneNumber.length >= 10) {
      setHref(`https://api.whatsapp.com/send?phone=` + dialCode.split('+')[1] + phoneNumber);
    }
    else {
      setErrMsg(true);
    }
  }
  return (
    <div className='max-w-[1240px] mx-auto flex flex-col items-center p-4 h-full'>
      <img className='mb-4 w-1/5 box-border' src={whatsappLogo} height={100} width={100} />

      <p className='mb-[10px] text-center'>Send a WhatsApp direct without adding to your contact list</p>
      <div className='flex flex-col items-center md:items-start md:flex-row w-full justify-center gap-[10px]'>
        <select id="countryCodeOptions" onChange={(e) => setDialCode(e.target.value)} className="sm:w-[90%] md:max-w-[8%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {countryData.map((item, index) => {
            return (
              <option key={index} value={item.dial_code} >{item.name + " " + item.dial_code}</option>)
          })}
        </select>
        <div className='w-full sm:w-[90%] md:w-[30%]'>
          <input type="number" id="first_name" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${errMsg ? `border-red-300` : ``}`} placeholder="Enter The Phone Number Here!" required />
          {errMsg ? <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            Please enter a valid phone number!
          </span> : null}
        </div>
      </div>

      <a href={href}>
        <button type="button" className="mt-[10px] text-white bg-[#25D366] hover:bg-[#14212b] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => { buttonClicked() }}>Message</button>
      </a>
      <p className='mt-[10px] max-w-[90%] text-center'>
        Just fill in the phone number you want to WhatsApp.
        No login or registration on this website needed. You do need an active WhatsApp account.
        This website does not use cookies and is very privacy friendly.</p>

    </div>
  )
}
