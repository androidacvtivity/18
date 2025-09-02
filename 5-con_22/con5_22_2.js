(function ($) {
    Drupal.behaviors.con5_22 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                return validateFloatKeyPressNumeric(this, event);
            });
            jQuery('input.float').keypress(function (event) {
                return validateFloatKeyPress(this, event);
            });

            jQuery(".chb").change(function () {
                jQuery(".chb").prop('checked', false);
                jQuery(this).prop('checked', true);
            });

            jQuery('input[name=TRIM_1]').attr('checked')
        }
    }
})(jQuery)


webform.validators.con5_22 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

    var cfoj = values.CFOJ;
    var cfojNr = cfoj.substring(0, 3);
    if ((cfojNr == '900' || cfojNr == '930' || cfojNr == '940' || cfojNr == '970' || cfojNr == '700' || cfojNr == '890') && (values.CAP1_R300_C1 == '' || values.CAP1_R300_C1 == 0)) {
        webform.warnings.push({
            'fieldName': 'CAP1_R300_C1',
            'msg': Drupal.t('Cod eroare: 18-034. Daca codul Formei organizatorico-juridice este 900 sau 930 sau 940 sau 970 sau 700 sau 890, rd. 300 > 0', {})
        });
    }

    if ((cfojNr == '530' || cfojNr == '510' || cfojNr == '520' || cfojNr == '540' || cfojNr == '420' || cfojNr == '450' || cfojNr == '590' || cfojNr == '620' || cfojNr == '690') && (values.CAP1_R040_C1 > 0)) {
        webform.errors.push({
            'fieldName': 'CFOJ',
            'msg': Drupal.t('Cod eroare: 18-036. Dacă codul Formei organizatorico-juridice este 530 sau 510 sau 520 sau 540 sau 420 sau 450 sau 590 sau 620 sau 690, atunci Intreprinderea dvs. nu trebuie sa prezinte forma 5-CON', {})
        });
    }

    /*  18-001  */
    var fields_table1_c1 = jQuery('#tab_con tbody tr td:nth-child(3)').find('input');
    var values = Drupal.settings.mywebform.values;
    var CAP1_R2000_C1 = values.CAP1_R2000_C1;
    var dac14 = 0;
    var dac = 0;

    /*  18-004  */
    var dac_a0 = 0;
    var dac_b0 = 0;

    var dac_a1 = 0;
    var dac_b1 = 0;

    var dac_a2 = 0;
    var dac_b2 = 0;

    var dac_a3 = 0;
    var dac_b3 = 0;

    var dac_a4 = 0;
    var dac_b4 = 0;

    var dac_a5 = 0;
    var dac_b5 = 0;

    var dac_a6 = 0;
    var dac_b6 = 0;

    var dac_a7 = 0;
    var dac_b7 = 0;

    var dac_a8 = 0;
    var dac_b8 = 0;

    var dac_a9 = 0;
    var dac_b9 = 0;

    var dac_a10 = 0;
    var dac_b10 = 0;

    var dac_a11 = 0;
    var dac_b11 = 0;

    var dac_a12 = 0;
    var dac_b12 = 0;

    var dac_a13 = 0;
    var dac_b13 = 0;

    var dac_a14 = 0;
    var dac_b14 = 0;

    var dac_a15 = 0;
    var dac_b15 = 0;

    var dac_a16 = 0;
    var dac_b16 = 0;

    var dac_a17 = 0;
    var dac_b17 = 0;

    var dac_a18 = 0;
    var dac_b18 = 0;

    var dac_a19 = 0;
    var dac_b19 = 0;

    var dac_a20 = 0;
    var dac_b20 = 0;

    for (var i = 0; i < fields_table1_c1.length; i++) {
        /*  18-001 rd.010=rd.011+rd.012+rd.018+rd.024+rd.030  */
        if (i == 0) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a0 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 1 || i == 2 || i == 8 || i == 14 || i == 20) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b0 = dac_b0 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val()) + '  =  ' + dac14  , {})});  */
            }
        }

        /*  18-002  rd.012>=rd.013  */
        if (i == 2) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a1 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 3) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b1 = parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-003  rd.012=rd.014+rd.015+rd.016+rd.017  */
        if (i == 2) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a2 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i > 3 && i < 8) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b2 = dac_b2 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val()) + '  =  ' + dac14  , {})});  */
            }
        }

        /* 18-004 rd.018=rd.020+rd.021+rd.022+rd.023  */
        if (i == 8) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a3 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (9 < i && i < 14) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b3 = dac_b3 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-005 rd.050=rd.051+rd.052+rd.053+rd.54+rd.055+rd.060+rd.061+rd.062++rd.063+rd.069  */
        if (i == 22) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a4 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 23 || i == 24 || i == 25 || i == 26 || i == 27 || i == 32 || i == 33 || i == 34 || i == 35 || i == 36) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b4 = dac_b4 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-006 rd.055=rd.056+rd.057+rd.058+rd.059  */
        if (i == 27) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a5 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (27 < i && i < 32) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b5 = dac_b5 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-007  rd.070=rd.071+rd.072+rd.073+rd.075+rd.076+rd.077+rd.078+d.079++rd.080+rd.081+rd.082+rd.089  */
        if (i == 37) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a6 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 38 || i == 39 || i == 40 || i == 42 || i == 43 || i == 44 || i == 45 || i == 46 || i == 47 || i == 48 || i == 49 || i == 50) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b6 = dac_b6 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-008  rd.073>=rd.074  */
        if (i == 40) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a7 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 41) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b7 = parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-009  rd.090>=rd.091+rd.092  */
        if (i == 51) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a8 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (51 < i && i < 54) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b8 = dac_b8 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-010 rd.110 = rd.111+rd.112 */
        //if (i == ) {
        //if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
        //dac_a9 = parseFloat(jQuery(fields_table1_c1[i]).val());
        //}
        //}
        //if ( < i && i < ) {
        //if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
        //dac_b9 = dac_b9 + parseFloat(jQuery(fields_table1_c1[i]).val());
        /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})}); */
        //}
        //}

        /*  18-011  rd.120=rd.130+rd.140+rd.150+rd.160+rd.170+rd.180+rd.190+rd.200+rd.210+rd.220+rd.230  */
        if (i == 56) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a10 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 57 || i == 59 || i == 62 || i == 63 || i == 64 || i == 69 || i == 70 || i == 71 || i == 72 || i == 73 || i == 79) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b10 = dac_b10 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-012  rd.130>=rd.131  */
        if (i == 57) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a11 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 58) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b11 = dac_b11 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-013  rd.140>=rd.141+rd.142  */
        if (i == 59) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a12 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 60 || i == 61) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b12 = dac_b12 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-014  rd.170=rd.171+rd.172  */
        if (i == 64) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a13 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 65 || i == 66) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b13 = dac_b13 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-015  rd.172>=rd.173+rd.174  */
        if (i == 66) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a14 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 67 || i == 68) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b14 = dac_b14 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-016  rd.220=rd.221+rd.222+rd.223+rd.224+rd.225  */
        if (i == 73) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a15 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 74 || i == 75 || i == 76 || i == 77 || i == 78) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b15 = dac_b15 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-017  rd.018>=rd.019  */
        if (i == 8) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a16 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 9) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b16 = dac_b16 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-021  rd.040=rd.050+rd.070+rd.090+rd.100+rd.110+rd.120  */
        if (i == 21) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a17 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 22 || i == 37 || i == 51 || i == 54 || i == 55 || i == 56) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b17 = dac_b17 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-022  COL1>=0  */
        if ((jQuery(fields_table1_c1[i]).val() < 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
            webform.errors.push({
                'fieldName': jQuery(fields_table1_c1[i]).attr('id'),
                'msg': Drupal.t('Cod eroare: 18-022. COL1>=0', {})
            });
        }

        /*  18-023  rd.024=rd.025+rd.026+rd.027+rd.028+rd.029  */
        if (i == 14) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a18 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 15 || i == 16 || i == 17 || i == 18 || i == 19) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b18 = dac_b18 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }

        /*  18-027  Daca rd.010>0, atunci si rd.040>0  */
        if (i == 1) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_a19 = parseFloat(jQuery(fields_table1_c1[i]).val());
            }
        }
        if (i == 21) {
            if ((jQuery(fields_table1_c1[i]).val() > 0) && (jQuery(fields_table1_c1[i]).val() != '')) {
                dac_b19 = dac_b19 + parseFloat(jQuery(fields_table1_c1[i]).val());
                /*  webform.errors.push({'fieldName' : 'CAP1_R014_C1', 'msg' : Drupal.t('Cod eroare: ' + parseFloat(jQuery(fields_table1_c1[i]).val())  , {})});  */
            }
        }
    }

    /*  18-001 rd.010=rd.011+rd.012+rd.018+rd.024+rd.030  */
    if (toFloat(dac_a0.toFixed(1)) != toFloat(dac_b0.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R010_C1',
            'msg': Drupal.t('Cod eroare: 18-001. rd.010=rd.011+rd.012+rd.018+rd.024+rd.030 (' + dac_a0.toFixed(1) + ' ;  ' + dac_b0.toFixed(1) + ')', {})
        });
    }

    /*  18-002 rd.012>=rd.013  */
    if (toFloat(dac_a1.toFixed(1)) < toFloat(dac_b1.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R013_C1',
            'msg': Drupal.t('Cod eroare: 18-002. rd.012>=rd.013 (' + dac_a1.toFixed(1) + ' ; ' + dac_b1.toFixed(1) + ')', {})
        });
    }

    /*  18-003 rd.012=rd.014+rd.015+rd.016+rd.017  */
    if (toFloat(dac_a2.toFixed(1)) != toFloat(dac_b2.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R012_C1',
            'msg': Drupal.t('Cod eroare: 18-003. rd.012=rd.014+rd.015+rd.016+rd.017 (' + dac_a2.toFixed(1) + ' ;  ' + dac_b2.toFixed(1) + ')', {})
        });
    }

    /*  18-004 rd.018=rd.020+rd.021+rd.022+rd.023  */
    if (toFloat(dac_a3.toFixed(1)) != toFloat(dac_b3.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R018_C1',
            'msg': Drupal.t('Cod eroare: 18-004. rd.018=rd.020+rd.021+rd.022+rd.023 (' + dac_a3.toFixed(1) + ' ;  ' + dac_b4.toFixed(1) + ')', {})
        });
    }

    /*  18-005 rd.050=rd.051+rd.052+rd.053+rd.54+rd.055+rd.060+rd.061+rd.062++rd.063+rd.069  */
    if (toFloat(dac_a4.toFixed(1)) != toFloat(dac_b4.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R050_C1',
            'msg': Drupal.t('Cod eroare: 18-005. rd.050=rd.051+rd.052+rd.053+rd.54+rd.055+rd.060+rd.061+rd.062++rd.063+rd.069 (' + dac_a3.toFixed(1) + ' ;  ' + dac_b4.toFixed(1) + ')', {})
        });
    }

    /*  18-006 rd.055=rd.056+rd.057+rd.058+rd.059  */
    if (toFloat(dac_a5.toFixed(1)) != toFloat(dac_b5.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R055_C1',
            'msg': Drupal.t('Cod eroare: 18-006. rd.055=rd.056+rd.057+rd.058+rd.059 (' + dac_a5.toFixed(1) + ' ;  ' + dac_b5.toFixed(1) + ')', {})
        });
    }

    /*  18-007 rd.070=rd.071+rd.072+rd.073+rd.075+rd.076+rd.077+rd.078+d.079++rd.080+rd.081+rd.082+rd.089  */
    if (toFloat(dac_a6.toFixed(1)) != toFloat(dac_b6.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R070_C1',
            'msg': Drupal.t('Cod eroare: 18-007. rd.030=rd.031+rd.032+rd.033+rd.034+rd.035+rd.040+rd.041+rd.042+rd.043+rd.049 (' + dac_a6.toFixed(1) + ' ;  ' + dac_b6.toFixed(1) + ')', {})
        });
    }

    /*  18-008 rd.073>=rd.074 */
    if (toFloat(dac_a7.toFixed(1)) < toFloat(dac_b7.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R073_C1',
            'msg': Drupal.t('Cod eroare: 18-008. rd.073>=rd.074  (' + dac_a7.toFixed(1) + ' ;  ' + dac_b7.toFixed(1) + ')', {})
        });
    }

    /*  18-009 rd.090>=rd.091+rd.092  */
    if (toFloat(dac_a8.toFixed(1)) != toFloat(dac_b8.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R090_C1',
            'msg': Drupal.t('Cod eroare: 18-009. rd.090 =rd.091+rd.092 (' + dac_a8.toFixed(1) + ' ;  ' + dac_b8.toFixed(1) + ')', {})
        });
    }

    /*  18-010 rd.111+rd.112  */
    /*if (toFloat(dac_a9.toFixed(1)) != toFloat(dac_b9.toFixed(1))) {
      webform.errors.push({
        'fieldName': 'CAP1_R110_C1',
        'msg': 'Cod eroare: 18-010. rd.110 = rd.111+rd.112 ( ' + dac_a9.toFixed(1) + ' ;  ' + dac_b9.toFixed(1) + ')'
      });
    }*/

    /*  18-011  rd.120=rd.130+rd.140+rd.150+rd.160+rd.170+rd.180+rd.190+rd.200+rd.210+rd.220+rd.230  */
    if (toFloat(dac_a10.toFixed(1)) != toFloat(dac_b10.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R120_C1',
            'msg': 'Cod eroare: 18-011. rd.120=rd.130+rd.140+rd.150+rd.160+rd.170+rd.180+rd.190+rd.200+rd.210+rd.220+rd.230 (' + dac_a10.toFixed(1) + ' ;  ' + dac_b10.toFixed(1) + ')'
        });
    }

    /*  18-012  rd.130>=rd.131  */
    if (toFloat(dac_a11.toFixed(1)) < toFloat(dac_b11.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R130_C1',
            'msg': Drupal.t('Cod eroare: 18-012. rd.130>=rd.131 (' + dac_a11.toFixed(1) + ' ;  ' + dac_b11.toFixed(1) + ')', {})
        });
    }

    /*  18-013  rd.140>=rd.141+rd.142  */
    if (toFloat(dac_a12.toFixed(1)) < toFloat(dac_b12.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R140_C1',
            'msg': Drupal.t('Cod eroare: 18-013. rd.140>=rd.141+rd.142 (' + dac_a12.toFixed(1) + ' ;  ' + dac_b12.toFixed(1) + ')', {})
        });
    }

    /*  18-014  rd.170=rd.171+rd.172  */
    if (toFloat(dac_a13.toFixed(1)) != toFloat(dac_b13.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R170_C1',
            'msg': Drupal.t('Cod eroare: 18-014. rd.170=rd.171+rd.172 (' + dac_a13.toFixed(1) + ' ;  ' + dac_b13.toFixed(1) + ')', {})
        });
    }

    /*  18-015  rd.172>=rd.173+rd.174  */
    if (toFloat(dac_a14.toFixed(1)) < toFloat(dac_b14.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R172_C1',
            'msg': Drupal.t('Cod eroare: 18-015. rd.172>=rd.173+rd.174 (' + dac_a14.toFixed(1) + ' ;  ' + dac_b14.toFixed(1) + ')', {})
        });
    }

    /*  18-016  rd.220=rd.221+rd.222+rd.223+rd.224+rd.225  */
    if (toFloat(dac_a15.toFixed(1)) != toFloat(dac_b15.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R220_C1',
            'msg': Drupal.t('Cod eroare: 18-016. rd.220=rd.221+rd.222+rd.223+rd.224+rd.225 (' + dac_a15.toFixed(1) + ' ;  ' + dac_b15.toFixed(1) + ')', {})
        });
    }

    /*  18-017  rd.018>=rd.019  */
    if (toFloat(dac_a16.toFixed(1)) < toFloat(dac_b16.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R018_C1',
            'msg': Drupal.t('Cod eroare: 18-017. rd.018>=rd.019 (' + dac_a16.toFixed(1) + ' ; ' + dac_b16.toFixed(1) + ')', {})
        });
    }

    /*  18-021  rd.040=rd.050+rd.070+rd.090+rd.100+rd.110+rd.120  */
    if (toFloat(dac_a17.toFixed(1)) != toFloat(dac_b17.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R040_C1',
            'msg': Drupal.t('Cod eroare: 18-021. rd.040=rd.050+rd.070+rd.090+rd.100+rd.110+rd.120 (' + dac_a17.toFixed(1) + ' ;  ' + dac_b17.toFixed(1) + ')', {})
        });
    }

    /*  18-023  rd.024=rd.025+rd.026+rd.027+rd.028+rd.029  */
    if (toFloat(dac_a18.toFixed(1)) != toFloat(dac_b18.toFixed(1))) {
        webform.errors.push({
            'fieldName': 'CAP1_R024_C1',
            'msg': Drupal.t('Cod eroare: 18-023. rd.024=rd.025+rd.026+rd.027+rd.028+rd.029 (' + dac_a18.toFixed(1) + ' ;  ' + dac_b18.toFixed(1) + ')', {})
        });
    }

    /*  18-027 Daca rd.010>0, atunci si rd.040>0  */
    var CAP1_R010_C1 = values.CAP1_R010_C1;
    if (values.CAP1_R010_C1 == '') {
        CAP1_R010_C1 = 0;
    } else {
        CAP1_R010_C1 = parseFloat(values.CAP1_R010_C1);
    }
    var CAP1_R040_C1 = values.CAP1_R040_C1;
    if (values.CAP1_R040_C1 == '') {
        CAP1_R040_C1 = 0;
    } else {
        CAP1_R040_C1 = parseFloat(values.CAP1_R040_C1);
    }
    if ((CAP1_R010_C1 != 0) && (CAP1_R040_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R040_C1',
            'msg': Drupal.t('Cod eroare: 18-027. Daca rd.010>0, atunci rd.040>0', {})
        });
    }

    /*  18-032 Daca este bifat "Da", atunci rd. 040>0  */
    if (TRIM_1.checked == 1 && CAP1_R040_C1 == 0) {
        webform.errors.push({
            'fieldName': 'CAP1_R040_C1',
            'msg': Drupal.t('Cod eroare: 18-032. Daca este bifat "Da", atunci rd.040>0', {})
        });
    }

    /*  18-033 Daca rd.040>0 este e necesar să fie bifat "Da"  */
    if (TRIM_2.checked == 1 && CAP1_R040_C1 > 0) {
        webform.errors.push({
            'fieldName': 'TRIM_1',
            'msg': Drupal.t('Cod eroare: 18-033. Daca rd.040>0 este e necesar să fie bifat "Da"', {})
        });
    }

    /*  18-035 Rindurile 310 sau 320 trebuie sa fie >0  */
    var CAP1_R310_C1 = values.CAP1_R310_C1;
    if (values.CAP1_R310_C1 == '') {
        CAP1_R310_C1 = 0;
    } else {
        CAP1_R310_C1 = parseInt(values.CAP1_R310_C1);
    }
    var CAP1_R320_C1 = values.CAP1_R320_C1;
    if (values.CAP1_R320_C1 == '') {
        CAP1_R320_C1 = 0;
    } else {
        CAP1_R320_C1 = parseInt(values.CAP1_R320_C1);
    }
    if ((CAP1_R040_C1 != 0) && (CAP1_R310_C1 == 0 && CAP1_R320_C1 == 0)) {
        webform.warnings.push({
            'fieldName': 'CAP1_R310_C1',
            'msg': Drupal.t('Cod eroare: 18-035. Rindurile 310 sau 320 trebuie sa fie >0', {})
        });
    }

    var trimestrial = Drupal.settings.mywebform.values.TRIM;
    var year = Drupal.settings.mywebform.values.YEAR;
    if (parseFloat(trimestrial) == get_trimestrial() && year == get_current_year()) {
        webform.errors.push({
            'fieldName': 'DATE_FISC',
            'msg': Drupal.t('Wrong fiscal period!')
        });
    }

    if (!values.STREET) {
        webform.warnings.push({
            "fieldName": "STREET",
            "msg": Drupal.t('Câmpul nu este completat')
        });
    }

    webform.validatorsStatus['con5_22'] = 1;
    validateWebform();
}

function get_trimestrial() {
    var date = new Date();
    return Math.ceil((date.getMonth() + 1) / 3);
}

function get_current_year() {
    var date = new Date();
    return date.getFullYear();
}